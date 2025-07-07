"use client";

import OverviewStats from "../molecules/OverviewStats";
import HistoryTable from "../molecules/HistoryTable";
import ChartCard from "../molecules/ChartCard";

export default function DashboardContent() {
  return (
    <div className="flex-1 p-6 bg-gray-50">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <select className="px-4 py-2 border border-gray-300 rounded-lg text-sm">
          <option>This Month</option>
          <option>Last Month</option>
          <option>This Year</option>
        </select>
      </div>

      <OverviewStats />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <HistoryTable />
        
        <ChartCard title="Type of Error Detected">
          <div className="w-full h-full bg-gradient-to-r from-blue-400 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-medium">Bar Chart Placeholder</span>
          </div>
        </ChartCard>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartCard title="Volume of Records Processed">
          <div className="w-full h-full bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg flex items-center justify-center">
            <span className="text-white font-medium">Line Chart Placeholder</span>
          </div>
        </ChartCard>

        <ChartCard title="LLM Recommendation Acceptance Rate">
          <div className="w-full h-full flex items-center justify-center">
            <div className="relative w-32 h-32">
              <div className="absolute inset-0 rounded-full border-8 border-gray-200"></div>
              <div className="absolute inset-0 rounded-full border-8 border-green-500 border-t-transparent transform rotate-45"></div>
              <div className="absolute inset-4 rounded-full bg-white flex items-center justify-center">
                <span className="text-sm font-medium text-gray-700">75%</span>
              </div>
            </div>
          </div>
        </ChartCard>
      </div>
    </div>
  );
}
