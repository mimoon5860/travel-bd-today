interface Menu {
  id: number;
  title: string;
  path: string;
}

const sidebarData: Menu[] = [
  {
    id: 1,
    title: "Profile",
    path: "/dashboard",
  },
  {
    id: 2,
    title: "Article",
    path: "/dashboard/article",
  },
  {
    id: 3,
    title: "Add Article",
    path: "/dashboard/add-article",
  },
  {
    id: 4,
    title: "Users",
    path: "/dashboard/users",
  },
  {
    id: 5,
    title: "Address",
    path: "/dashboard/address",
  },
];
export default sidebarData;
