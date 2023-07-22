import { ReactElement } from "react";
import { IconType } from "react-icons";
import { ImProfile } from "react-icons/im";
import { BiSolidLocationPlus } from "react-icons/bi";
import { MdArticle } from "react-icons/md";
import { IoIosCreate } from "react-icons/io";
import { FiUsers } from "react-icons/fi";

interface Menu {
  id: number;
  title: string;
  path: string;
  logo: ReactElement<IconType>;
}

const sidebarData: Menu[] = [
  {
    id: 1,
    title: "Profile",
    path: "/dashboard",
    logo: <ImProfile className="text-2xl" />,
  },
  {
    id: 2,
    title: "Article",
    path: "/dashboard/article",
    logo: <MdArticle className="text-2xl" />,
  },
  {
    id: 3,
    title: "Add Article",
    path: "/dashboard/add-article",
    logo: <IoIosCreate className="text-2xl" />,
  },
  {
    id: 4,
    title: "Users",
    path: "/dashboard/users",
    logo: <FiUsers className="text-2xl" />,
  },
  {
    id: 5,
    title: "Address",
    path: "/dashboard/address",
    logo: <BiSolidLocationPlus className="text-2xl" />,
  },
];
export default sidebarData;
