import prisma from "@/utils/prisma";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

interface RequestBody {
  email: string;
  password: string;
}

export async function POST(request: Request, res: Response) {
  const body: RequestBody = await request.json();
  console.log({ body });

  const user = await prisma.user.findFirst({
    where: {
      email: body.email,
    },
  });

  if (user && (await bcrypt.compare(body.password, user.password))) {
    const { password, ...userWithoutPass } = user;

    return NextResponse.json({ success: true, data: userWithoutPass });
  } else return new Response(JSON.stringify(null), { status: 500 });
}
