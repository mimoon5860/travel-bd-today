"use client";
import { ReactNode } from "react";
import { useSession } from "next-auth/react";
interface IProps {
  children: ReactNode;
}
export default function LoadingProvider({ children }: IProps) {
  const { status } = useSession();

  if (status === "loading") {
    return <h1>Loading...</h1>;
  }

  return { children };
}
