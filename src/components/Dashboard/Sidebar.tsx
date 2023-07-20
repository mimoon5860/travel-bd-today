"use client";
import Link from "next/link";
import sidebarData from "./sidebarData";
import { usePathname } from "next/navigation";

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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-gray-100"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                  {pathname === item.path ? (
                    <h2 className="text-blue-600">{item.title}</h2>
                  ) : (
                    <h2 className="text-gray-600">{item.title}</h2>
                  )}
                </Link>
              </li>
            ))}
            <li className="rounded-sm">
              <Link href="/">
                <span className="flex items-center p-2 space-x-3 rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-gray-100"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>

                  <h2 className="text-blue-600">Logout</h2>
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
