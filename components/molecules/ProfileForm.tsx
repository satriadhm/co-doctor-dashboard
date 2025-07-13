import FormField from "../atoms/FormField";
import SectionHeader from "../atoms/SectionHeader";

interface ProfileFormProps {
  fullName: string;
  email: string;
  institution: string;
  specialization: string;
  onFullNameChange: (value: string) => void;
  onEmailChange: (value: string) => void;
  onInstitutionChange: (value: string) => void;
  onSpecializationChange: (value: string) => void;
}

export default function ProfileForm({
  fullName,
  email,
  institution,
  specialization,
  onFullNameChange,
  onEmailChange,
  onInstitutionChange,
  onSpecializationChange,
}: ProfileFormProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
      <SectionHeader title="Profile Information" />

      <FormField
        label="Full Name"
        placeholder="Lorem Ipsum"
        value={fullName}
        onChange={onFullNameChange}
      />

      <FormField
        label="Email"
        placeholder="Lorem Ipsum"
        type="email"
        value={email}
        onChange={onEmailChange}
      />

      <FormField
        label="Institution"
        placeholder="Lorem Ipsum"
        value={institution}
        onChange={onInstitutionChange}
      />

      <FormField
        label="Specialization"
        placeholder="Lorem Ipsum"
        value={specialization}
        onChange={onSpecializationChange}
      />
    </div>
  );
}
