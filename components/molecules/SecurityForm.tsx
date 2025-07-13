import FormField from "../atoms/FormField";
import SectionHeader from "../atoms/SectionHeader";

interface SecurityFormProps {
  password: string;
  onPasswordChange: (value: string) => void;
}

export default function SecurityForm({
  password,
  onPasswordChange,
}: SecurityFormProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm mb-8">
      <SectionHeader title="Security" />

      <FormField
        label="Change Password"
        placeholder="Lorem Ipsum"
        type="password"
        value={password}
        onChange={onPasswordChange}
      />
    </div>
  );
}
