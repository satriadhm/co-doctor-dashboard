import Link from "next/link";

interface LogoProps {
  className?: string;
}

export default function Logo({ className = "" }: LogoProps) {
  return (
    <Link
      href="/"
      className={`text-[#6E62E5] font-black text-4xl ${className}`}
    >
      Co-Doctor
    </Link>
  );
}
