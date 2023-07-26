import prisma from "@/utils/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(_req: NextRequest, { params }: any) {
  if (!params.id || !parseInt(params.id)) {
    return NextResponse.json(
      {
        success: false,
        message: "You must provide valid id in params",
      },
      { status: 400 }
    );
  }

  try {
    const place = await prisma.place.findUnique({
      select: {
        id: true,
        title: true,
        coverImage: true,
        description: true,
        author: {
          select: {
            id: true,
            name: true,
            photo: true,
          },
        },
        thana: {
          select: {
            name: true,
            district: {
              select: {
                name: true,
                division: {
                  select: {
                    name: true,
                  },
                },
              },
            },
          },
        },
        review: {
          select: {
            id: true,
            rating: true,
            review: true,
            createdAt: true,
            user: {
              select: {
                id: true,
                name: true,
                photo: true,
              },
            },
            reviewContent: {
              select: {
                id: true,
                fileName: true,
                type: true,
              },
            },
          },
        },
        status: true,
        createdAt: true,
      },
      where: {
        id: parseInt(params.id),
      },
    });

    if (place) {
      return NextResponse.json({ success: true, data: place });
    } else {
      return NextResponse.json(
        { success: false, message: "Not found" },
        { status: 404 }
      );
    }
  } catch (err: any) {
    return NextResponse.json(
      {
        success: false,
        data: [],
        message: err.message,
      },
      { status: 500 }
    );
  }
}
