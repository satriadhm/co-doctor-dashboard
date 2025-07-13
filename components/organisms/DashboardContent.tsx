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
          <div className="w-full h-64 flex items-end justify-center space-x-4 p-4">
            {/* Bar Chart Simulation */}
            <div className="flex items-end space-x-3">
              <div className="w-12 h-32 bg-[#6E62E5] rounded-t"></div>
              <div className="w-12 h-24 bg-[#6E62E5] opacity-70 rounded-t"></div>
              <div className="w-12 h-20 bg-[#6E62E5] opacity-50 rounded-t"></div>
              <div className="w-12 h-16 bg-[#6E62E5] opacity-40 rounded-t"></div>
              <div className="w-12 h-12 bg-[#6E62E5] opacity-30 rounded-t"></div>
            </div>
          </div>
        </ChartCard>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartCard title="Volume of Records Processed">
          <div className="w-full h-64 relative p-4">
            {/* Line Chart Simulation */}
            <div className="w-full h-full bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500 opacity-20 rounded-lg"></div>
              <svg className="w-full h-full" viewBox="0 0 300 150">
                <path
                  d="M20,120 Q60,100 100,80 T180,60 T260,40"
                  stroke="#6E62E5"
                  strokeWidth="3"
                  fill="none"
                />
                <circle cx="20" cy="120" r="3" fill="#6E62E5" />
                <circle cx="100" cy="80" r="3" fill="#6E62E5" />
                <circle cx="180" cy="60" r="3" fill="#6E62E5" />
                <circle cx="260" cy="40" r="3" fill="#6E62E5" />
              </svg>
            </div>
          </div>
        </ChartCard>

        <ChartCard title="LLM Recommendation Acceptance Rate">
          <div className="w-full h-64 flex items-center justify-center">
            <div className="relative">
              {/* Donut Chart */}
              <svg
                className="w-40 h-40 transform -rotate-90"
                viewBox="0 0 120 120"
              >
                {/* Background circle */}
                <circle
                  cx="60"
                  cy="60"
                  r="40"
                  stroke="#e5e7eb"
                  strokeWidth="12"
                  fill="none"
                />
                {/* Green arc (Accepted) */}
                <circle
                  cx="60"
                  cy="60"
                  r="40"
                  stroke="#10b981"
                  strokeWidth="12"
                  fill="none"
                  strokeDasharray="170 251"
                  strokeLinecap="round"
                />
                {/* Yellow arc (Manual Editing) */}
                <circle
                  cx="60"
                  cy="60"
                  r="40"
                  stroke="#f59e0b"
                  strokeWidth="12"
                  fill="none"
                  strokeDasharray="50 251"
                  strokeDashoffset="-170"
                  strokeLinecap="round"
                />
                {/* Red arc (Rejected) */}
                <circle
                  cx="60"
                  cy="60"
                  r="40"
                  stroke="#ef4444"
                  strokeWidth="12"
                  fill="none"
                  strokeDasharray="31 251"
                  strokeDashoffset="-220"
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-xs text-gray-500 mb-1">
                    Acceptance Rate
                  </div>
                </div>
              </div>
            </div>
            <div className="ml-6 space-y-2">
              <div className="flex items-center text-sm">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                <span>Suggestion Accepted</span>
              </div>
              <div className="flex items-center text-sm">
                <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                <span>Manual Editing</span>
              </div>
              <div className="flex items-center text-sm">
                <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                <span>Suggestion Rejected</span>
              </div>
            </div>
          </div>
        </ChartCard>
      </div>
    </div>
  );
}
