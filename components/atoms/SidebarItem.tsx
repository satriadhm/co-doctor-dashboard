"use client";
import Link from "next/link";

interface SidebarItemProps {
  icon: string;
  label: string;
  active: boolean;
  href: string;
  isMinimized?: boolean;
}

export default function SidebarItem({
  icon,
  label,
  active = false,
  href,
  isMinimized = false,
}: SidebarItemProps) {
  return (
    <Link
      href={href}
      className={`w-full flex items-center ${
        isMinimized ? "justify-center px-2 py-4" : "space-x-3 px-4 py-3"
      } rounded-lg text-left transition-colors group relative ${
        active ? "bg-[#6E62E5] text-white" : "text-gray-600 hover:bg-gray-100"
      }`}
      title={isMinimized ? label : undefined}
    >
      <span className={`${isMinimized ? "text-xl" : "text-lg"}`}>{icon}</span>
      {!isMinimized && <span className="font-medium">{label}</span>}

      {/* Tooltip for minimized state */}
      {isMinimized && (
        <div className="absolute left-full ml-2 px-2 py-1 bg-gray-800 text-white text-sm rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap z-50">
          {label}
        </div>
      )}
    </Link>
  );
}
