"use client";

import Sidebar from "../organisms/Sidebar";
import DashboardHeader from "../organisms/DashboardHeader";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar - always visible, no overlay needed */}
      <Sidebar />

      <div className="flex-1 flex flex-col min-w-0">
        <DashboardHeader />
        {children}
      </div>
    </div>
  );
}
