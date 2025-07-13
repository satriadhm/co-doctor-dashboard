"use client";

import { useState } from "react";
import { SettingsContent } from "../../../components/organisms";

export default function SettingPage() {
  const [formData, setFormData] = useState({
    fullName: "Lorem Ipsum",
    email: "Lorem Ipsum",
    institution: "Lorem Ipsum",
    specialization: "Lorem Ipsum",
    password: "Lorem Ipsum",
  });

  const handleSave = () => {
    // Handle save logic here
    console.log("Settings saved:", formData);
    // You can add API call or other save logic here
  };

  return (
    <SettingsContent
      fullName={formData.fullName}
      email={formData.email}
      institution={formData.institution}
      specialization={formData.specialization}
      password={formData.password}
      onFullNameChange={value =>
        setFormData(prev => ({ ...prev, fullName: value }))
      }
      onEmailChange={value => setFormData(prev => ({ ...prev, email: value }))}
      onInstitutionChange={value =>
        setFormData(prev => ({ ...prev, institution: value }))
      }
      onSpecializationChange={value =>
        setFormData(prev => ({ ...prev, specialization: value }))
      }
      onPasswordChange={value =>
        setFormData(prev => ({ ...prev, password: value }))
      }
      onSave={handleSave}
    />
  );
}
