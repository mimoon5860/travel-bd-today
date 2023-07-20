import { signJwtAccessToken } from "@/utils/lib";
import prisma from "@/utils/prisma";
import bcrypt from "bcryptjs";

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
    const accessToken = signJwtAccessToken(userWithoutPass);
    const result = {
      ...userWithoutPass,
      accessToken,
    };
    return new Response(JSON.stringify(result));
  } else return new Response(JSON.stringify(null));
}
