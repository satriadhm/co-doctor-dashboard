import ProfileForm from "../molecules/ProfileForm";
import SecurityForm from "../molecules/SecurityForm";
import SaveButton from "../atoms/SaveButton";

interface SettingsContentProps {
  fullName: string;
  email: string;
  institution: string;
  specialization: string;
  password: string;
  onFullNameChange: (value: string) => void;
  onEmailChange: (value: string) => void;
  onInstitutionChange: (value: string) => void;
  onSpecializationChange: (value: string) => void;
  onPasswordChange: (value: string) => void;
  onSave: () => void;
}

export default function SettingsContent({
  fullName,
  email,
  institution,
  specialization,
  password,
  onFullNameChange,
  onEmailChange,
  onInstitutionChange,
  onSpecializationChange,
  onPasswordChange,
  onSave
}: SettingsContentProps) {
  return (
    <div className="flex-1 p-10 bg-gray-50">
      <h1 className="text-2xl font-semibold text-gray-800 mb-8">
        Setting Account
      </h1>

      <div>
        <ProfileForm
          fullName={fullName}
          email={email}
          institution={institution}
          specialization={specialization}
          onFullNameChange={onFullNameChange}
          onEmailChange={onEmailChange}
          onInstitutionChange={onInstitutionChange}
          onSpecializationChange={onSpecializationChange}
        />

        <SecurityForm
          password={password}
          onPasswordChange={onPasswordChange}
        />

        <div className="flex justify-end">
          <SaveButton onClick={onSave} />
        </div>
      </div>
    </div>
  );
}
