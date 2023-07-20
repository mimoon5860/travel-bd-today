import prisma from "@/utils/prisma";
import { NextRequest, NextResponse } from "next/server";
import sharp from "sharp";
import { v4 as uuid } from "uuid";
import { extname, join } from "path";
import { writeFile } from "fs/promises";

interface IBodyData {
  title: string;
  description: string;
  thanaId: string;
  authorId: string;
  coverImage: string;
}

export async function POST(req: NextRequest, res: NextResponse) {
  const formData = await req.formData();
  const body: any = Object.fromEntries(formData);

  const file = formData.get("coverImage") as Blob | null;

  if (!file) {
    return NextResponse.json(
      { error: "Thumbnail photo is required." },
      { status: 400 }
    );
  }

  console.log({ body });
  const { title, thanaId, authorId, description } = body as IBodyData;
  const buffer = Buffer.from(await file.arrayBuffer());
  const pathDist: string = join(process.cwd(), "/public/uploads/places");
  const fileExtension = extname(file.name);
  const filename = `${uuid()}${fileExtension}`;
  body.thumbnail = filename;
  const place = await prisma.place.create({
    data: {
      title,
      thanaId: parseInt(thanaId),
      authorId: parseInt(authorId),
      description,
      coverImage: filename,
    },
  });
  await writeFile(`${pathDist}/${filename}`, buffer);

  return NextResponse.json({ success: true, data: place });
}

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const districtId = url.searchParams.get("districtId");
}
