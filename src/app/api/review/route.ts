import prisma from "@/utils/prisma";
import { NextResponse } from "next/server";
import { extname, join } from "path";
import { writeFile } from "fs/promises";
import { v4 as uuid } from "uuid";
interface RequestBody {
  userId: string;
  placeId: string;
  rating: string;
  review: string;
}

export async function POST(req: Request) {
  const formData = await req.formData();
  const body: any = Object.fromEntries(formData);

  const file1 = formData.get("review_photo1") as Blob | null;
  const file2 = formData.get("review_photo2") as Blob | null;
  const file3 = formData.get("review_photo3") as Blob | null;
  const file4 = formData.get("review_photo4") as Blob | null;
  const file5 = formData.get("review_photo5") as Blob | null;

  const files = [file1, file2, file3, file4, file5];

  const { userId, placeId, rating, review } = body as RequestBody;
  const response = await prisma.review.create({
    data: {
      userId: parseInt(userId),
      placeId: parseInt(placeId),
      rating: parseInt(rating),
      review,
    },
  });

  const { id } = response;

  files.forEach(async (file) => {
    if (file) {
      const buffer = Buffer.from(await file.arrayBuffer());
      const pathDist: string = join(process.cwd(), "/public/uploads/reviews");
      const fileExtension = extname(file.name);
      const fileName = `${uuid()}${fileExtension}`;
      await prisma.reviewContent.create({
        data: { fileName: `reviews/${fileName}`, reviewId: id, type: "photo" },
      });
      await writeFile(`${pathDist}/${fileName}`, buffer);
    }
  });

  return NextResponse.json({ success: true, data: response });
}

interface IWhere {
  placeId?: number;
  status?: boolean;
}

export async function GET(req: Request) {
  const url = new URL(req.url);
  const placeId = url.searchParams.get("placeId");
  const status = url.searchParams.get("active");
  const skip = url.searchParams.get("skip") || "0";
  const limit = url.searchParams.get("limit") || "20";
  const where: IWhere = {};
  if (placeId) {
    where.placeId = parseInt(placeId);
  }
  if (status === "active") {
    where.status = true;
  }
  if (status === "inactive") {
    where.status = false;
  }

  const thana = await prisma.review.findMany({
    select: {
      id: true,
      rating: true,
      review: true,
      place: {
        select: {
          id: true,
          title: true,
        },
      },
      user: {
        select: {
          id: true,
          name: true,
        },
      },
      reviewContent: {
        select: {
          id: true,
          fileName: true,
          type: true,
        },
      },
    },
    where,
    orderBy: {
      rating: "desc",
    },
    take: parseInt(limit),
    skip: parseInt(skip),
  });

  return NextResponse.json({ success: true, data: thana });
}
