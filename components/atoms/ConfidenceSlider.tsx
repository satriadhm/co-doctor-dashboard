interface ConfidenceSliderProps {
  value: number;
  onChange: (value: number) => void;
}

export default function ConfidenceSlider({
  value,
  onChange,
}: ConfidenceSliderProps) {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <label className="text-sm font-medium text-gray-700">
          LLM Confidence Level
        </label>
      </div>
      <div className="relative">
        <input
          type="range"
          min="0"
          max="100"
          value={value}
          onChange={e => onChange(Number(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          style={{
            background: `linear-gradient(to right, #6E62E5 0%, #6E62E5 ${value}%, #e5e7eb ${value}%, #e5e7eb 100%)`,
          }}
        />
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>Conservative</span>
          <span>Aggressive</span>
        </div>
      </div>
    </div>
  );
}
