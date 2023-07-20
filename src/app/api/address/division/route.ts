import prisma from "@/utils/prisma";
import { NextResponse } from "next/server";

interface RequestBody {
  name: string;
}

export async function POST(req: Request) {
  const body: RequestBody = await req.json();
  const res = await prisma.division.create({ data: { name: body.name } });

  return NextResponse.json({ success: true });
}

export async function GET(req: Request) {
  try{

    const res = await prisma.division.findMany();
    return NextResponse.json({ success: true, data: res });
  
  }catch(err:any){
    console.log({err})
  return NextResponse.json({ success: false, data: [], message:err.message },{status:500});
  }
}
