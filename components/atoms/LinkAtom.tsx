import Link from "next/link";
import { ReactNode } from "react";

interface LinkAtomProps {
  href: string;
  children: ReactNode;
  variant?: "default" | "navigation" | "active";
  className?: string;
}

export default function LinkAtom({
  href,
  children,
  variant = "default",
  className = "",
}: LinkAtomProps) {
  const baseClasses = "transition-colors cursor-pointer";
  
  const variantClasses = {
    default: "text-[#6E62E5] hover:opacity-80",
    navigation: "text-[#AEAEAE] hover:text-gray-500 font-semibold",
    active: "text-black font-semibold"
  };

  return (
    <Link
      href={href}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
