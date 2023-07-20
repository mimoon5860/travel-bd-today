import prisma from "@/utils/prisma";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

interface RequestBody {
  name: string;
  email: string;
  password: string;
}

export async function POST(req: Request) {
  const body: RequestBody = await req.json();
  const checkUser = await prisma.user.findFirst({
    where: { email: body.email },
  });
  console.log({ checkUser });
  if (checkUser) {
    return new Response(
      JSON.stringify({ success: false, message: "Email already exist" }),
      { status: 500 }
    );
  }
  const user = await prisma.user.create({
    data: {
      name: body.name,
      email: body.email,
      password: await bcrypt.hash(body.password, 10),
    },
  });

  const { password, ...userInfo } = user;
  return NextResponse.json({ userInfo });
}
