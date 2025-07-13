"use client";

import { useState } from "react";

interface FileUploadAreaProps {
  onFileSelect: (file: File | null) => void;
  selectedFile?: File | null;
}

export default function FileUploadArea({
  onFileSelect,
  selectedFile,
}: FileUploadAreaProps) {
  const [isDragOver, setIsDragOver] = useState(false);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      onFileSelect(files[0]);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    onFileSelect(file);
  };

  const removeFile = () => {
    onFileSelect(null);
  };

  return (
    <div className="mb-6">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Upload File
      </label>

      {selectedFile ? (
        <div className="border-2 border-gray-200 rounded-lg p-6 bg-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-[#6E62E5] rounded flex items-center justify-center">
                <span className="text-white text-sm">📄</span>
              </div>
              <span className="text-[#6E62E5] font-medium">
                {selectedFile.name}
              </span>
            </div>
            <button
              onClick={removeFile}
              className="text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>
          </div>
        </div>
      ) : (
        <div
          className={`border-2 border-dashed rounded-lg p-12 text-center transition-colors ${
            isDragOver
              ? "border-[#6E62E5] bg-purple-50"
              : "border-gray-300 bg-white"
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <input
            type="file"
            onChange={handleFileInput}
            className="hidden"
            id="file-upload"
            accept=".doc,.docx,.pdf,.txt"
          />
          <label
            htmlFor="file-upload"
            className="bg-gray-600 text-white px-6 py-3 rounded-full cursor-pointer hover:bg-gray-700 transition-colors inline-block"
          >
            Select Files
          </label>
        </div>
      )}
    </div>
  );
}
