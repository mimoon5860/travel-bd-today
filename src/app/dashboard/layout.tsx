"use client";
import Sidebar from "@/components/Dashboard/Sidebar";
import DashboardHeader from "@/components/Header/DashboardHeader";
import { useState } from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  return (
    <section>
      <DashboardHeader setOpen={setOpen} open={open} />
      <div className="flex  mt-16">
        <div className="lg:block hidden">
          <Sidebar open={open} />
        </div>
        {open ? <Sidebar open={open} /> : ""}
        <div className="container mx-auto p-5">{children}</div>
      </div>
    </section>
  );
}
