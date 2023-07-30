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

export async function POST(req: NextRequest, _res: NextResponse) {
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
      coverImage: `places/${filename}`,
    },
  });

  await writeFile(`${pathDist}/${filename}`, buffer);

  return NextResponse.json({ success: true, data: place });
}

interface IPlaceFilter {
  thana: {
    district_id?: number;
    district: {
      division_id?: number;
    };
  };
  thana_id?: number;
  authorId?: number;
  status?: boolean;
}

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const division_id = url.searchParams.get("division_id");
  const district_id = url.searchParams.get("district_id");
  const thana_id = url.searchParams.get("thana_id");
  const author_id = url.searchParams.get("author_id");
  const status = url.searchParams.get("status");
  const limit = url.searchParams.get("limit") || "50";
  const skip = url.searchParams.get("skip") || "0";

  const filter: IPlaceFilter = { thana: { district: {} } };
  if (division_id) filter.thana.district.division_id = parseInt(division_id);
  if (district_id) filter.thana.district_id = parseInt(district_id);
  if (thana_id) filter.thana_id = parseInt(thana_id);
  if (author_id) filter.authorId = parseInt(author_id);
  if (status === "active") filter.status = true;
  if (status === "inactive") filter.status = false;

  try {
    const places = await prisma.place.findMany({
      select: {
        id: true,
        title: true,
        coverImage: true,
        status: true,
        createdAt: true,
      },
      orderBy: {
        createdAt: "desc",
      },
      where: filter,
      take: parseInt(limit),
      skip: parseInt(skip),
    });

    return NextResponse.json({ success: true, data: places });
  } catch (err: any) {
    return NextResponse.json(
      {
        success: false,
        data: [],
        message: err.message,
      },
      { status: 500 }
    );
  }
}
