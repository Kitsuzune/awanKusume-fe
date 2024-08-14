import React from "react";
import Sidebar from "../../../components/admin/layout/sidebar";
import Header from "../../../components/admin/layout/header";


export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <div className="w-full min-h-screen bg-white flex flex-row">
      <Sidebar />
      <div className="flex-1">
        <Header />
        {children}
      </div>
    </div>

  );
}
