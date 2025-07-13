"use client";

import { useState } from "react";
import { UploadForm, AnalysisResults } from "../../../components/organisms";
import { AnalysisOption } from "../../../constants/uploadData";

type PageState = "upload" | "analyzing" | "results";

interface AnalysisData {
  patientId: string;
  selectedFile: File | null;
  textContent: string;
  analysisOptions: AnalysisOption[];
  selectedMode: string;
  confidenceLevel: number;
}

export default function UploadPage() {
  const [pageState, setPageState] = useState<PageState>("upload");
  const [analysisData, setAnalysisData] = useState<AnalysisData | null>(null);

  const handleStartAnalysis = (data: AnalysisData) => {
    setAnalysisData(data);
    setPageState("analyzing");

    // Simulate analysis process
    setTimeout(() => {
      setPageState("results");
    }, 3000);
  };

  const handleFinishReview = () => {
    setPageState("upload");
    setAnalysisData(null);
  };

  const handleSaveDraft = () => {
    console.log("Saving draft...");
  };

  const handleExportNotes = () => {
    console.log("Exporting corrected notes...");
  };

  if (pageState === "analyzing") {
    return (
      <div className="flex-1 p-6 bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#6E62E5] mx-auto mb-4"></div>
          <h2 className="text-xl font-semibold text-gray-800">
            Analyzing Document...
          </h2>
          <p className="text-gray-600">
            Please wait while we process your clinical notes.
          </p>
        </div>
      </div>
    );
  }

  if (pageState === "results" && analysisData) {
    return (
      <AnalysisResults
        patientId={analysisData.patientId || "12345"}
        fileName={analysisData.selectedFile?.name || "Budi_240520.docx"}
        onFinishReview={handleFinishReview}
        onSaveDraft={handleSaveDraft}
        onExportNotes={handleExportNotes}
      />
    );
  }

  return <UploadForm onStartAnalysis={handleStartAnalysis} />;
}
