import { ReactNode, createElement } from "react";

interface HeadingProps {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: ReactNode;
  className?: string;
}

export default function Heading({ level, children, className = "" }: HeadingProps) {
  const baseClasses = "font-black text-[#6E62E5]";
  const levelClasses = {
    1: "text-4xl",
    2: "text-3xl",
    3: "text-2xl",
    4: "text-xl",
    5: "text-lg",
    6: "text-base"
  };

  return createElement(
    `h${level}`,
    { className: `${baseClasses} ${levelClasses[level]} ${className}` },
    children
  );
}
