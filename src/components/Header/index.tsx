"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";
import { Menu } from "@/types/menu";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

const Header = () => {
  const { status } = useSession();
  const navigate = useRouter();
  const [searchText, setSearchText] = useState("");

  // Navbar toggle
  // const session = "";
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  const handleSearch = () => {
    if (!searchText) return;
    navigate.push(`/place?title=${searchText}`);
  };

  return (
    <>
      <header
        className={`header top-0 left-0 z-40 flex w-full items-center bg-transparent ${
          sticky
            ? "!fixed !z-[9999] !bg-white !bg-opacity-80 shadow-sticky backdrop-blur-sm !transition dark:!bg-primary dark:!bg-opacity-20"
            : "absolute !bg-white !bg-opacity-60 shadow-sticky backdrop-blur-sm !transition dark:!bg-primary dark:!bg-opacity-20"
        }`}
      >
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="w-60 hidden md:block max-w-full px-4 xl:mr-12">
              <Link
                href="/"
                className={`header-logo block w-full ${
                  sticky ? "py-3 lg:py-2" : "py-5"
                } `}
              >
                <Image
                  src="/images/main-logo.png"
                  alt="logo"
                  width={140}
                  height={50}
                  className="w-full dark:hidden"
                />
                <Image
                  src="/images/main-logo2.png"
                  alt="logo"
                  width={140}
                  height={50}
                  className="hidden w-full dark:block"
                />
              </Link>
            </div>
            <div className="flex w-full items-center justify-between px-4">
              <div>
                <button
                  onClick={navbarToggleHandler}
                  id="navbarToggler"
                  aria-label="Mobile Menu"
                  className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
                >
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? " top-[7px] rotate-45" : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? "opacity-0 " : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? " top-[-8px] -rotate-45" : " "
                    }`}
                  />
                </button>
                <nav
                  id="navbarCollapse"
                  className={`navbar absolute right-0 z-30 w-[250px] rounded border-[.5px] border-body-color/50 bg-white py-4 px-6 duration-300 dark:border-body-color/20 dark:bg-dark lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${
                    navbarOpen
                      ? "visibility top-full opacity-100"
                      : "invisible top-[120%] opacity-0"
                  }`}
                >
                  <ul className="block lg:flex lg:space-x-12">
                    {status === "authenticated" ? (
                      <>
                        <li className="group relative">
                          <Link
                            href="/dashboard"
                            className={`flex py-2 text-base text-dark group-hover:opacity-70 dark:text-white lg:mr-0 lg:inline-flex lg:py-6 lg:px-0`}
                          >
                            Dashboard
                          </Link>
                        </li>
                        <li className="group relative md:hidden">
                          <button
                            onClick={() => signOut()}
                            className={`flex py-2 text-base text-dark group-hover:opacity-70 dark:text-white lg:mr-0 lg:inline-flex lg:py-6 lg:px-0`}
                          >
                            Logout
                          </button>
                        </li>
                      </>
                    ) : (
                      <>
                        <li className="group relative block md:hidden">
                          <Link
                            href="/signin"
                            className={`flex py-2 text-base text-dark group-hover:opacity-70 dark:text-white lg:mr-0 lg:inline-flex lg:py-6 lg:px-0`}
                          >
                            Signin{" "}
                          </Link>
                        </li>
                        <li className="group relative block md:hidden">
                          <Link
                            href="/signup"
                            className={`flex py-2 text-base text-dark group-hover:opacity-70 dark:text-white lg:mr-0 lg:inline-flex lg:py-6 lg:px-0`}
                          >
                            Signup{" "}
                          </Link>
                        </li>
                      </>
                    )}
                    {menuData.map((menuItem: Menu, index) => (
                      <li key={menuItem.id} className="group relative">
                        <Link
                          href={menuItem.path}
                          className={`flex py-2 text-base text-dark group-hover:opacity-70 dark:text-white lg:mr-0 lg:inline-flex lg:py-6 lg:px-0`}
                        >
                          {menuItem.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
              <div className="flex items-center gap-3">
                <div>
                  <input
                    onChange={(e) => setSearchText(e.target.value)}
                    type="email"
                    name="email"
                    placeholder="Search places..."
                    className="w-full mt-2 md:mt-0 rounded-md border border-transparent py-1 px-2 md:py-3 md:px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                  />
                </div>
                <button
                  onClick={handleSearch}
                  className="ease-in-up rounded-md bg-primary py-1 md:py-3 px-2 md:px-8 text-base font-bold text-white transition duration-300 hover:bg-opacity-90 hover:shadow-signUp md:block md:px-9 lg:px-6 xl:px-9"
                >
                  Search
                </button>
              </div>
              <div className="flex items-center justify-end pr-16 lg:pr-0">
                {status === "authenticated" ? (
                  <button onClick={() => signOut()} className="hidden md:block">
                    Logout
                  </button>
                ) : (
                  <>
                    <Link
                      href="/signin"
                      className="py-3 px-7 hidden text-base font-bold text-dark hover:opacity-70 dark:text-white md:block"
                    >
                      Sign In
                    </Link>
                    <Link
                      href="/signup"
                      className="ease-in-up hidden rounded-md bg-primary py-3 px-8 text-base font-bold text-white transition duration-300 hover:bg-opacity-90 hover:shadow-signUp md:block md:px-9 lg:px-6 xl:px-9"
                    >
                      Sign Up
                    </Link>
                  </>
                )}
                <div>
                  <ThemeToggler />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
