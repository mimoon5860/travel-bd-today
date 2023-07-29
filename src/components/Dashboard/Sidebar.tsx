"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BiLogOut } from "react-icons/bi";
import { AiOutlineHome } from "react-icons/ai";
import { useSession, signOut } from "next-auth/react";
import { ImProfile } from "react-icons/im";
import { BiSolidLocationPlus } from "react-icons/bi";
import { MdArticle } from "react-icons/md";
import { IoIosCreate } from "react-icons/io";
export default function Sidebar({ open }: { open: boolean }) {
  const pathname = usePathname();
  const { data } = useSession();

  return (
    <div
      className={` ${
        open ? "w-40" : "w-60 "
      } flex flex-col h-screen p-3 bg-gray-800 shadow duration-300`}
    >
      <div className="space-y-3">
        <div className="flex-1">
          <ul className="pt-2 pb-4 space-y-1 text-sm">
            <li className="rounded-sm">
              <Link
                href="/dashboard"
                className="flex items-center p-2 space-x-3 rounded-md"
              >
                <ImProfile className="text-2xl" />
                {pathname === "/dashboard" ? (
                  <h2 className="font-bold">Profile</h2>
                ) : (
                  <h2 className="text-gray-600">Profile</h2>
                )}
              </Link>
            </li>
            <li className="rounded-sm">
              <Link
                href="/dashboard/article"
                className="flex items-center p-2 space-x-3 rounded-md"
              >
                <MdArticle className="text-2xl" />
                {pathname === "/dashboard/article" ? (
                  <h2 className="font-bold">Article</h2>
                ) : (
                  <h2 className="text-gray-600">Article</h2>
                )}
              </Link>
            </li>
            <li className="rounded-sm">
              <Link
                href="/dashboard/add-article"
                className="flex items-center p-2 space-x-3 rounded-md"
              >
                <IoIosCreate className="text-2xl" />
                {pathname === "/dashboard/add-article" ? (
                  <h2 className="font-bold">Add Article</h2>
                ) : (
                  <h2 className="text-gray-600">Add Article</h2>
                )}
              </Link>
            </li>
            {data.user.role === "Admin" ? (
              <>
                <li className="rounded-sm">
                  <Link
                    href="/dashboard/address"
                    className="flex items-center p-2 space-x-3 rounded-md"
                  >
                    <BiSolidLocationPlus className="text-2xl" />
                    {pathname === "/dashboard/address" ? (
                      <h2 className="font-bold">Address</h2>
                    ) : (
                      <h2 className="text-gray-600">Address</h2>
                    )}
                  </Link>
                </li>
                <li className="rounded-sm">
                  <Link
                    href="/dashboard/users"
                    className="flex items-center p-2 space-x-3 rounded-md"
                  >
                    <BiSolidLocationPlus className="text-2xl" />
                    {pathname === "/dashboard/users" ? (
                      <h2 className="font-bold">Users</h2>
                    ) : (
                      <h2 className="text-gray-600">Users</h2>
                    )}
                  </Link>
                </li>
              </>
            ) : (
              ""
            )}
            <li className="rounded-sm">
              <Link
                href="/"
                className="flex items-center p-2 space-x-3 rounded-md"
              >
                <AiOutlineHome className="text-2xl" />
                <h2 className="text-blue-600">Back to Home</h2>
              </Link>
            </li>
            <li
              onClick={() => signOut()}
              className="flex items-center p-2 space-x-3 rounded-md cursor-pointer"
            >
              <BiLogOut className="text-2xl" />
              <h2 className="text-blue-600">Logout</h2>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
