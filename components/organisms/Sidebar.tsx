"use client";

import { usePathname } from "next/navigation";
import SidebarItem from "../atoms/SidebarItem";

export default function Sidebar() {
  const pathname = usePathname();

  const menuItems = [
    { icon: "📊", label: "Dashboard", href: "/dashboard" },
    { icon: "📤", label: "Upload", href: "/upload" },
    { icon: "📋", label: "History", href: "/history" },
    { icon: "⚙️", label: "Settings", href: "/settings" },
    { icon: "❓", label: "Help", href: "/help" },
  ];

  return (
    <div className="w-64 bg-white border-r border-gray-200 min-h-screen">
      <div className="p-6">
        <div className="flex items-center space-x-2 mb-8">
          <div className="w-8 h-8 bg-[#6E62E5] rounded flex items-center justify-center">
            <span className="text-white text-sm">☰</span>
          </div>
        </div>

        <nav className="space-y-2">
          {menuItems.map((item, index) => (
            <SidebarItem
              key={index}
              icon={item.icon}
              label={item.label}
              active={pathname === item.href}
              href={item.href}
            />
          ))}
        </nav>
      </div>
    </div>
  );
}
