import prisma from "@/utils/prisma";
import { NextResponse } from "next/server";

interface RequestBody {
  name: string;
}

export async function POST(req: Request) {
  const body: RequestBody = await req.json();
  console.log(body)
  const res = await prisma.division.create({
    data: { name: body.name },
  });
  console.log({ res });

  return NextResponse.json({ success: true });
}
