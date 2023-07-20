import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "Travel bd server is running" });
}
