"use client";

import Button from "../atoms/Button";

interface SocialButtonProps {
  provider: "google" | "facebook";
  action: "signin" | "signup";
  onClick?: () => void;
}

export default function SocialButton({
  provider,
  action,
  onClick,
}: SocialButtonProps) {
  const icons = {
    google: "🔍",
    facebook: "📘",
  };

  const labels = {
    google: `Sign ${action === "signin" ? "in" : "up"} with Google`,
    facebook: `Sign ${action === "signin" ? "in" : "up"} with Facebook`,
  };

  return (
    <Button
      variant="outline"
      fullWidth
      onClick={onClick}
      className="flex items-center justify-center gap-2 border-gray-300 text-gray-700 hover:border-gray-400"
    >
      <span>{icons[provider]}</span>
      {labels[provider]}
    </Button>
  );
}
