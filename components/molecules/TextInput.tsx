interface TextInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export default function TextInput({
  value,
  onChange,
  placeholder = "Lorem Ipsum",
}: TextInputProps) {
  return (
    <div className="mb-6">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Add Text
      </label>
      <textarea
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        rows={8}
        className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6E62E5] focus:bg-white transition-colors resize-none"
      />
    </div>
  );
}
