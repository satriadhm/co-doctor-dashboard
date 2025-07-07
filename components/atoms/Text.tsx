import { ReactNode } from "react";

interface TextProps {
  children: ReactNode;
  variant?: "body" | "large" | "small" | "caption";
  className?: string;
}

export default function Text({ children, variant = "body", className = "" }: TextProps) {
  const variantClasses = {
    large: "text-xl",
    body: "text-base",
    small: "text-sm",
    caption: "text-xs"
  };

  return (
    <p className={`${variantClasses[variant]} ${className}`}>
      {children}
    </p>
  );
}
