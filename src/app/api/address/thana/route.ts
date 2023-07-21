import prisma from "@/utils/prisma";
import { NextResponse } from "next/server";

interface RequestBody {
  name: string;
  districtId: number;
}

export async function POST(req: Request) {
  const body: RequestBody = await req.json();
  const res = await prisma.thana.create({
    data: { name: body.name, district_id: body.districtId },
  });

  return NextResponse.json({ success: true, data: res });
}

export async function GET(req: Request) {
  const url = new URL(req.url);
  const districtId = url.searchParams.get("districtId");
  if (!districtId) {
    return NextResponse.json(
      {
        success: false,
        message: "You must provide districtId in query",
      },
      { status: 400 }
    );
  }
  const thana = await prisma.thana.findMany({
    where: { district_id: parseInt(districtId) },
  });

  return NextResponse.json({ success: true, data: thana });
}
