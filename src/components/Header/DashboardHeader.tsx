import { useEffect, useState } from "react";
import ThemeToggler from "./ThemeToggler";

interface Props {
  setOpen: (open: boolean) => void;
  open: boolean;
}

const DashboardHeader = ({ setOpen, open }: Props) => {
  const [sticky, setSticky] = useState(false);

  const handleStickyNavbar = () => {
    if (window.scrollY >= 60) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  const myDate = new Date();
  const hrs = myDate.getHours();

  let greet = "Hello";

  if (hrs < 12) greet = "Good Morning";
  else if (hrs >= 12 && hrs <= 17) greet = "Good Afternoon";
  else if (hrs >= 17 && hrs <= 24) greet = "Good Evening";

  return (
    <header
      className={`header top-0 left-0 z-40 flex w-full  shadow-sticky  items-center bg-transparent ${
        sticky
          ? "!fixed !z-[9999] !bg-white !bg-opacity-80 backdrop-blur-sm !transition dark:!bg-primary dark:!bg-opacity-20"
          : "absolute"
      }`}
    >
      <div className="container py-1">
        <div className="relative -mx-4 flex items-center justify-between">
          <div className="flex">
            <button className="lg:hidden block" onClick={() => setOpen(!open)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </button>
            <div>
              <p className="text-xl font-bold ms-6">{greet} Moon</p>
              <span className="text-xl font-bold ms-6">
                Welcome to your dashboard
              </span>
            </div>
          </div>
          <ThemeToggler />
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
