"use client";

import { useState } from "react";
import ErrorCorrectionItem from "../molecules/ErrorCorrectionItem";
import { errorDetails, samplePatientText } from "../../constants/uploadData";

interface AnalysisResultsProps {
  patientId: string;
  fileName: string;
  onFinishReview: () => void;
  onSaveDraft: () => void;
  onExportNotes: () => void;
}

export default function AnalysisResults({
  patientId,
  fileName,
  onFinishReview,
  onSaveDraft,
  onExportNotes,
}: AnalysisResultsProps) {
  const [errors, setErrors] = useState(errorDetails);

  const handleToggleExpand = (id: string) => {
    setErrors(prev =>
      prev.map(error =>
        error.id === id ? { ...error, isExpanded: !error.isExpanded } : error
      )
    );
  };

  const handleApplySuggestion = (id: string) => {
    console.log("Applying suggestion for error:", id);
  };

  const handleMarkAsNotError = (id: string) => {
    console.log("Marking as not error:", id);
  };

  return (
    <div className="flex-1 p-6 bg-gray-50">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">Report</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Patient ID */}
          <div className="bg-white p-6 rounded-lg">
            <h3 className="text-sm font-medium text-gray-700 mb-2">
              ID Patient
            </h3>
            <p className="text-gray-900">{patientId}</p>
          </div>

          {/* Detailed Patient Records */}
          <div className="bg-white p-6 rounded-lg">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-[#6E62E5] rounded flex items-center justify-center">
                <span className="text-white text-sm">📄</span>
              </div>
              <span className="text-[#6E62E5] font-medium">{fileName}</span>
            </div>

            <h3 className="text-lg font-medium text-gray-800 mb-4">
              Detailed Patient Records
            </h3>

            <div className="text-sm text-gray-700 leading-relaxed mb-4">
              {samplePatientText}
            </div>

            <button className="text-[#6E62E5] text-sm font-medium hover:underline">
              See Details
            </button>
          </div>

          {/* Review and Error Correction */}
          <div className="bg-white p-6 rounded-lg">
            <h3 className="text-lg font-medium text-gray-800 mb-4">
              Review and Error Correction
            </h3>

            <div className="space-y-4">
              {errors.map(error => (
                <ErrorCorrectionItem
                  key={error.id}
                  error={error}
                  onToggleExpand={handleToggleExpand}
                  onApplySuggestion={handleApplySuggestion}
                  onMarkAsNotError={handleMarkAsNotError}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Details and Tools */}
        <div className="lg:col-span-1">
          <div className="bg-white p-6 rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium text-gray-800">
                Details and Correction Tools
              </h3>
              <span className="text-red-500 text-sm font-medium">
                Diagnosis
              </span>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-2">
                  Error Details
                </h4>
                <p className="text-sm text-gray-600 mb-2">
                  LLM Correction Suggestions:
                </p>
                <div className="bg-gray-50 p-3 rounded">
                  <span className="text-[#6E62E5] font-medium">
                    kardiomiopati hipertrofik
                  </span>
                  <div className="flex items-center space-x-2 mt-2">
                    <button className="text-green-600 hover:text-green-700">
                      👍
                    </button>
                    <button className="text-red-600 hover:text-red-700">
                      👎
                    </button>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-sm text-gray-600 mb-2">Manual Correction</p>
                <div className="bg-gray-50 p-3 rounded">
                  <span className="text-gray-700">
                    kardiomiopati hipertrofik
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end space-x-4 mt-6">
        <button
          onClick={onSaveDraft}
          className="bg-gray-500 text-white px-6 py-3 rounded-full font-medium hover:bg-gray-600 transition-colors"
        >
          Save Draft
        </button>
        <button
          onClick={onExportNotes}
          className="bg-green-600 text-white px-6 py-3 rounded-full font-medium hover:bg-green-700 transition-colors"
        >
          Export Corrected Notes
        </button>
        <button
          onClick={onFinishReview}
          className="bg-[#6E62E5] text-white px-6 py-3 rounded-full font-medium hover:bg-[#5A52D5] transition-colors"
        >
          Finish Review
        </button>
      </div>
    </div>
  );
}
