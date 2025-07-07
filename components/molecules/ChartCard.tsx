export default function ChartCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border">
      <div className="flex items-center mb-4">
        <div className="w-6 h-6 rounded bg-[#6E62E5] flex items-center justify-center mr-3">
          <span className="text-white text-sm">📊</span>
        </div>
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      </div>
      <div className="h-64 flex items-center justify-center">
        {children}
      </div>
    </div>
  );
}
