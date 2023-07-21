import prisma from "@/utils/prisma";
import { NextRequest, NextResponse } from "next/server";
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

interface IPlaceFilter {
  division_id?: number;
  district_id?: number;
  thana_id?: number;
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

  const { title, thanaId, authorId, description } = body as IBodyData;
  const buffer = Buffer.from(await file.arrayBuffer());
  const pathDist: string = join(process.cwd(), "/public/uploads/places");
  const fileExtension = extname(file.name);
  const filename = `${uuid()}${fileExtension}`;
  body.thumbnail = filename;
  const place = await prisma.place.create({
    data: {
      title,
      thana_id: parseInt(thanaId),
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
  const division_id = url.searchParams.get("division_id");
  const district_id = url.searchParams.get("district_id");
  const thana_id = url.searchParams.get("thana_id");

  const filter: IPlaceFilter = {};
  if (division_id) filter.division_id = parseInt(division_id);
  if (district_id) filter.district_id = parseInt(district_id);
  if (thana_id) filter.thana_id = parseInt(thana_id);

  const places = await prisma.place.findMany({
    select: {
      thana: {},
    },
    where: {},
  });
}
