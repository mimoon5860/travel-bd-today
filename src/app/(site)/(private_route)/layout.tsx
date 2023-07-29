import { ReactNode } from "react";
import { getServerSession } from "next-auth";
import authOptions from "../../api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";

interface IProps {
  children: ReactNode;
}
export default async function GuestLayout({ children }: IProps) {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    return redirect("/signin");
  }

  return <>{children}</>;
}
