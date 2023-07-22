"use client";
import Link from "next/link";
import sidebarData from "./sidebarData";
import { usePathname } from "next/navigation";
import { BiLogOut } from "react-icons/bi";

export default function Sidebar({ open }: { open: boolean }) {
  const pathname = usePathname();

  return (
    <div
      className={` ${
        open ? "w-40" : "w-60 "
      } flex flex-col h-screen p-3 bg-gray-800 shadow duration-300`}
    >
      <div className="space-y-3">
        <div className="flex-1">
          <ul className="pt-2 pb-4 space-y-1 text-sm">
            {sidebarData.map((item) => (
              <li key={item.id} className="rounded-sm">
                <Link
                  href={item.path}
                  className="flex items-center p-2 space-x-3 rounded-md"
                >
                  {item.logo}
                  {pathname === item.path ? (
                    <h2 className="font-bold">{item.title}</h2>
                  ) : (
                    <h2 className="text-gray-600">{item.title}</h2>
                  )}
                </Link>
              </li>
            ))}
            <li className="rounded-sm">
              <Link
                href="/"
                className="flex items-center p-2 space-x-3 rounded-md"
              >
                <BiLogOut className="text-2xl" />
                <h2 className="text-blue-600">Logout</h2>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
