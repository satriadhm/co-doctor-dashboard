"use client";

import Logo from "../atoms/Logo";
import NavigationLinks from "../molecules/NavigationLinks";
import AuthActions from "../molecules/AuthActions";

export default function Navbar() {
  return (
    <nav className="w-full bg-white px-8 py-4 flex items-center justify-between shadow-lg sticky top-0 z-50">
      <Logo />
      <div className="flex items-center space-x-8">
        <NavigationLinks />
        <AuthActions />
      </div>
    </nav>
  );
}
