import prisma from "@/utils/prisma";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import { extname, join } from "path";
import { writeFile } from "fs/promises";
import { v4 as uuid } from "uuid";

interface IBodyData {
  name: string;
  email: string;
  phone: string;
  password: string;
}

export async function POST(req: Request) {
  const formData = await req.formData();
  const body: any = Object.fromEntries(formData);

  console.log({ body });

  const { name, email, phone, password } = body as IBodyData;
  const file = formData.get("photo") as Blob | null;

  const checkUser = await prisma.user.findFirst({
    where: { email },
  });

  if (checkUser) {
    return NextResponse.json(
      { success: false, message: "Email already exist" },
      { status: 500 }
    );
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  const pathDist: string = join(process.cwd(), "/public/uploads");
  const fileExtension = extname(file.name);
  const photo = `user/${uuid()}${fileExtension}`;
  const user = await prisma.user.create({
    data: {
      name,
      email,
      phone,
      photo,
      password: await bcrypt.hash(password, 10),
    },
  });

  if (user) {
    await writeFile(`${pathDist}/${photo}`, buffer);
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
