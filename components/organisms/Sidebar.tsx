"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import SidebarItem from "../atoms/SidebarItem";

export default function Sidebar() {
  const pathname = usePathname();
  const [isMinimized, setIsMinimized] = useState(false);

  const menuItems = [
    { icon: "📊", label: "Dashboard", href: "/dashboard" },
    { icon: "📤", label: "Upload", href: "/upload" },
    { icon: "📋", label: "History", href: "/history" },
    { icon: "⚙️", label: "Settings", href: "/settings" },
    { icon: "❓", label: "Help", href: "/help" },
  ];

  return (
    <div
      className={`bg-white border-r border-gray-200 min-h-screen transition-all duration-300 ${
        isMinimized ? "w-16" : "w-64"
      }`}
    >
      <div className="p-3 mt-2">
        <div className="flex items-center mb-8">
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-100 transition-colors"
            aria-label={isMinimized ? "Expand sidebar" : "Minimize sidebar"}
          >
            <span className="text-gray-700 text-lg font-bold p-3">☰</span>
          </button>
          <span
            className={`font-semibold text-gray-800 transition-all duration-300 overflow-hidden whitespace-nowrap ml-2 ${
              isMinimized ? "w-auto opacity-0" : "w-auto opacity-100"
            }`}
          >
            Co-Doctor
          </span>
        </div>

        <nav className="space-y-2">
          {menuItems.map((item, index) => (
            <SidebarItem
              key={index}
              icon={item.icon}
              label={item.label}
              active={pathname === item.href}
              href={item.href}
              isMinimized={isMinimized}
            />
          ))}
        </nav>
      </div>
    </div>
  );
}
