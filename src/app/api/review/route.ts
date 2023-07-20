import prisma from "@/utils/prisma";
import { NextResponse } from "next/server";

interface RequestBody {
  userId: number;
  placeId: number;
  rating: number;
  review: string;
}

export async function POST(req: Request) {
  const body: RequestBody = await req.json();
  const res = await prisma.review.create({
    data: body,
  });
  console.log({ res });
  // const files= req.

  // const reviewContent= await prisma.reviewContent.create({})

  return NextResponse.json({ success: true });
}

interface IWhere {
  placeId?: number;
}
export async function GET(req: Request) {
  const url = new URL(req.url);
  const placeId = url.searchParams.get("placeId");
  const where: IWhere = {};
  if (placeId) {
    where.placeId = parseInt(placeId);
  }

  const thana = await prisma.review.findMany({
    where,
  });

  return NextResponse.json({ success: true, data: thana });
}
