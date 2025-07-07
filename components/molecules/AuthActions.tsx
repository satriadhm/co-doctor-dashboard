import Button from "../atoms/Button";
import LinkAtom from "../atoms/LinkAtom";

export default function AuthActions() {
  return (
    <div className="flex items-center space-x-4">
      <LinkAtom href="/login">
        <Button variant="primary" size="lg">
          Login
        </Button>
      </LinkAtom>
    </div>
  );
}
