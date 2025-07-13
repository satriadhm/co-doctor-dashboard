import Checkbox from "../atoms/Checkbox";
import RadioButton from "../atoms/RadioButton";
import ConfidenceSlider from "../atoms/ConfidenceSlider";
import { AnalysisOption, AnalysisModeOption } from "../../constants/uploadData";

interface AnalysisSettingsProps {
  analysisOptions: AnalysisOption[];
  analysisModeOptions: AnalysisModeOption[];
  selectedMode: string;
  confidenceLevel: number;
  onAnalysisOptionChange: (id: string, checked: boolean) => void;
  onModeChange: (mode: string) => void;
  onConfidenceLevelChange: (level: number) => void;
}

export default function AnalysisSettings({
  analysisOptions,
  analysisModeOptions,
  selectedMode,
  confidenceLevel,
  onAnalysisOptionChange,
  onModeChange,
  onConfidenceLevelChange,
}: AnalysisSettingsProps) {
  return (
    <div className="bg-white p-6 rounded-lg">
      <h3 className="text-lg font-medium text-gray-800 mb-6">Setting</h3>

      <div className="mb-6">
        <h4 className="text-sm font-medium text-gray-700 mb-3">Analysis</h4>
        <div className="space-y-3">
          {analysisOptions.map(option => (
            <Checkbox
              key={option.id}
              id={option.id}
              label={option.label}
              checked={option.checked}
              onChange={checked => onAnalysisOptionChange(option.id, checked)}
            />
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h4 className="text-sm font-medium text-gray-700 mb-3">
          Analysis Mode
        </h4>
        <div className="space-y-3">
          {analysisModeOptions.map(option => (
            <RadioButton
              key={option.id}
              id={option.id}
              name="analysisMode"
              value={option.value}
              label={option.label}
              checked={selectedMode === option.value}
              onChange={onModeChange}
            />
          ))}
        </div>
      </div>

      <ConfidenceSlider
        value={confidenceLevel}
        onChange={onConfidenceLevelChange}
      />
    </div>
  );
}
