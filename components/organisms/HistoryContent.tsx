"use client";

import { useState } from "react";
import HistoryFilters from "../molecules/HistoryFilters";
import HistoryTable from "./HistoryTable";
import { HistoryRecord, historyData } from "../../constants/historyData";

export default function HistoryContent() {
  const [timeFilter, setTimeFilter] = useState("This Month");
  const [statusFilter, setStatusFilter] = useState("Today");

  const handleActionClick = (record: HistoryRecord) => {
    if (record.action === "Download") {
      // Handle download logic
      console.log("Downloading:", record.fileName);
    } else {
      // Handle view details logic
      console.log("Viewing details for:", record.id);
    }
  };

  const handleDownloadHistory = () => {
    // Handle download all history logic
    console.log("Downloading all history");
  };

  return (
    <div className="flex-1 p-6 bg-gray-50">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">
          Patient Record History
        </h1>
        <HistoryFilters
          timeFilter={timeFilter}
          statusFilter={statusFilter}
          onTimeFilterChange={setTimeFilter}
          onStatusFilterChange={setStatusFilter}
        />
      </div>

      <HistoryTable records={historyData} onActionClick={handleActionClick} />

      <div className="flex justify-end mt-6">
        <button
          onClick={handleDownloadHistory}
          className="bg-[#6E62E5] text-white px-6 py-3 rounded-full font-medium hover:bg-[#5751D1] transition-colors"
        >
          Download History
        </button>
      </div>
    </div>
  );
}
