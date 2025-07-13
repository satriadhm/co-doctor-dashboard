interface FilterDropdownProps {
  value: string;
  options: string[];
  onChange: (value: string) => void;
}

export default function FilterDropdown({
  value,
  options,
  onChange,
}: FilterDropdownProps) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="appearance-none bg-white border border-[#6E62E5] text-[#6E62E5] rounded-full px-6 py-2 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-[#6E62E5] cursor-pointer min-w-[120px]"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
        <svg
          className="w-4 h-4 text-[#6E62E5]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </div>
  );
}
