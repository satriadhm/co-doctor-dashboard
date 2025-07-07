import SocialButton from "./SocialButton";

interface SocialAuthProps {
  action: "signin" | "signup";
}

export default function SocialAuth({ action }: SocialAuthProps) {
  return (
    <div className="space-y-3">
      <SocialButton provider="google" action={action} />
      <SocialButton provider="facebook" action={action} />
    </div>
  );
}
