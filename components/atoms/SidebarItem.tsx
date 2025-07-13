"use client";
import Link from "next/link";

interface SidebarItemProps {
  icon: string;
  label: string;
  active: boolean;
  href: string;
}

export default function SidebarItem({
  icon,
  label,
  active = false,
  href,
}: SidebarItemProps) {
  return (
    <Link
      href={href}
      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
        active ? "bg-[#6E62E5] text-white" : "text-gray-600 hover:bg-gray-100"
      }`}
    >
      <span className="text-lg">{icon}</span>
      <span className="font-medium">{label}</span>
    </Link>
  );
}
