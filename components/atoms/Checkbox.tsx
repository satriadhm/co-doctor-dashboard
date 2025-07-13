interface CheckboxProps {
  id: string;
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export default function Checkbox({
  id,
  label,
  checked,
  onChange,
}: CheckboxProps) {
  return (
    <div className="flex items-center space-x-3">
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={e => onChange(e.target.checked)}
        className="w-4 h-4 text-[#6E62E5] bg-gray-100 border-gray-300 rounded focus:ring-[#6E62E5] focus:ring-2"
      />
      <label htmlFor={id} className="text-sm text-gray-700">
        {label}
      </label>
    </div>
  );
}
