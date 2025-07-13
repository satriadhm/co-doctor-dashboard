"use client";

import { useState } from "react";
import PatientIdInput from "../atoms/PatientIdInput";
import FileUploadArea from "../atoms/FileUploadArea";
import AnalysisSettings from "../molecules/AnalysisSettings";
import TextInput from "../molecules/TextInput";
import {
  analysisOptions,
  analysisModeOptions,
  AnalysisOption,
} from "../../constants/uploadData";

interface AnalysisData {
  patientId: string;
  selectedFile: File | null;
  textContent: string;
  analysisOptions: AnalysisOption[];
  selectedMode: string;
  confidenceLevel: number;
}

interface UploadFormProps {
  onStartAnalysis: (data: AnalysisData) => void;
}

export default function UploadForm({ onStartAnalysis }: UploadFormProps) {
  const [patientId, setPatientId] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [textContent, setTextContent] = useState("");
  const [analysisOpts, setAnalysisOpts] = useState(analysisOptions);
  const [selectedMode, setSelectedMode] = useState("auto");
  const [confidenceLevel, setConfidenceLevel] = useState(75);

  const handleAnalysisOptionChange = (id: string, checked: boolean) => {
    setAnalysisOpts(prev =>
      prev.map(opt => (opt.id === id ? { ...opt, checked } : opt))
    );
  };

  const handleStartAnalysis = () => {
    const analysisData = {
      patientId,
      selectedFile,
      textContent,
      analysisOptions: analysisOpts,
      selectedMode,
      confidenceLevel,
    };
    onStartAnalysis(analysisData);
  };

  return (
    <div className="flex-1 p-6 bg-gray-50">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">
        Upload Patient Notes
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-6 rounded-lg">
            <PatientIdInput value={patientId} onChange={setPatientId} />

            <FileUploadArea
              selectedFile={selectedFile}
              onFileSelect={setSelectedFile}
            />

            <TextInput value={textContent} onChange={setTextContent} />
          </div>
        </div>

        <div className="lg:col-span-1">
          <AnalysisSettings
            analysisOptions={analysisOpts}
            analysisModeOptions={analysisModeOptions}
            selectedMode={selectedMode}
            confidenceLevel={confidenceLevel}
            onAnalysisOptionChange={handleAnalysisOptionChange}
            onModeChange={setSelectedMode}
            onConfidenceLevelChange={setConfidenceLevel}
          />
        </div>
      </div>

      <div className="flex justify-end mt-6">
        <button
          onClick={handleStartAnalysis}
          className="bg-[#6E62E5] text-white px-8 py-3 rounded-full font-medium hover:bg-[#5A52D5] transition-colors"
        >
          Start Analysis
        </button>
      </div>
    </div>
  );
}
