interface PatientIdInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export default function PatientIdInput({
  value,
  onChange,
  placeholder = "Lorem Ipsum",
}: PatientIdInputProps) {
  return (
    <div className="mb-6">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        ID Patient
      </label>
      <input
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full px-6 py-4 bg-gray-100 border-0 rounded-full text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6E62E5] focus:bg-white transition-colors"
      />
    </div>
  );
}
