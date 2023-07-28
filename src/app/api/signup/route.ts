import prisma from "@/utils/prisma";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

interface RequestBody {
  name: string;
  email: string;
  phone: string;
  password: string;
}

export async function POST(req: Request) {
  const body: RequestBody = await req.json();
  const checkUser = await prisma.user.findFirst({
    where: { email: body.email },
  });

  if (checkUser) {
    return NextResponse.json(
      { success: false, message: "Email already exist" },
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

  if (user) {
    return NextResponse.json({
      success: true,
      message: "Registation successful",
    });
  } else {
    return NextResponse.json(
      {
        success: false,
        message: "Registation unsuccessful",
      },
      { status: 500 }
    );
  }
}
