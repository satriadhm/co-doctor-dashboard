interface RadioButtonProps {
  id: string;
  name: string;
  value: string;
  label: string;
  checked: boolean;
  onChange: (value: string) => void;
}

export default function RadioButton({
  id,
  name,
  value,
  label,
  checked,
  onChange,
}: RadioButtonProps) {
  return (
    <div className="flex items-center space-x-3">
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={e => onChange(e.target.value)}
        className="w-4 h-4 text-[#6E62E5] bg-gray-100 border-gray-300 focus:ring-[#6E62E5] focus:ring-2"
      />
      <label htmlFor={id} className="text-sm text-gray-700">
        {label}
      </label>
    </div>
  );
}
