"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function PublicNav() {
  const pathname = usePathname();

  return (
    <nav className="w-full bg-white px-8 py-4 flex items-center justify-between shadow-lg sticky top-0 z-50">
      {/* Logo */}
      <div className="flex items-center">
        <Link href="/">
          <div className="w-24 h-8 bg-[#6E62E5] rounded cursor-pointer"></div>
        </Link>
      </div>

      {/* Navigation Links & Actions */}
      <div className="flex items-center space-x-8">
        <Link
          href="/about"
          className={`font-semibold transition-colors ${
            pathname === "/about"
              ? "text-black"
              : "text-[#AEAEAE] hover:text-gray-500"
          }`}
        >
          About
        </Link>

        <Link
          href="/signup"
          className={`font-medium transition-colors cursor-pointer ${
            pathname === "/signup"
              ? "text-black"
              : "text-[#AEAEAE] hover:text-gray-500"
          }`}
        >
          Sign Up
        </Link>

        <Link
          href="/login"
          className={`px-12 py-3 rounded-full font-semibold transition-opacity cursor-pointer bg-[#6E62E5] text-white hover:opacity-90`}
        >
          Login
        </Link>
      </div>
    </nav>
  );
}
