"use client";

import Sidebar from "../organisms/Sidebar";
import DashboardHeader from "../organisms/DashboardHeader";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-gray-50">
      {/* Fixed Sidebar */}
      <Sidebar />

      {/* Main content with left margin to account for fixed sidebar */}
      <div
        className="transition-all duration-300"
        style={{ marginLeft: "var(--sidebar-width, 256px)" }}
      >
        <div className="min-h-screen flex flex-col">
          <DashboardHeader />
          {children}
        </div>
      </div>
    </div>
  );
}
