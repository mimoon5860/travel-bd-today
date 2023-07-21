import prisma from "@/utils/prisma";
import { NextResponse, NextRequest } from "next/server";

interface RequestBody {
  name: string;
  divisionId: number;
}

export async function POST(req: NextRequest) {
  const body: RequestBody = await req.json();
  console.log({ body });
  const res = await prisma.district.create({
    data: { name: body.name, division_id: body.divisionId },
  });
  console.log({ res });

  return NextResponse.json({ success: true, data: res });
}

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const divisionId = url.searchParams.get("divisionId");
  if (!divisionId) {
    return NextResponse.json(
      {
        success: false,
        message: "You must provide divisionId in query",
      },
      { status: 400 }
    );
  }
  const districts = await prisma.district.findMany({
    where: { division_id: parseInt(divisionId) },
  });

  return NextResponse.json({ success: true, data: districts });
}
