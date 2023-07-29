"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";

const Page = () => {
  const { data } = useSession();
  console.log({ data });
  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-md mx-auto">
      <div className="relative w-32 h-32 mx-auto mb-4">
        <Image
          src={
            data.user?.photo
              ? `/uploads/${data.user.photo}`
              : "/images/testimonials/demo-author.png"
          }
          alt="Profile Photo"
          className="rounded-full"
          width={128}
          height={128}
        />
        <div
          className="absolute inset-0 rounded-full shadow-inner"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        ></div>
      </div>
      <div className="text-center">
        <h1 className="text-2xl font-semibold">{data.user.name}</h1>
        {/* <p className="mb-4">ID: {data.user.id}</p> */}
        <p className="text-gray-700">Email: {data.user.email}</p>
        <p className="text-gray-700">Phone: {data.user.phone}</p>
      </div>
    </div>
  );
};

export default Page;
