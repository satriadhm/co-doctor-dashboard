export default function HistoryTable() {
  const historyItems = [
    { id: "ID12345", status: "Processed", time: "2:15" },
    { id: "ID12345", status: "Processed", time: "2:15" },
  ];

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">History</h3>
        <button className="text-[#6E62E5] text-sm hover:underline">
          See Detail
        </button>
      </div>

      <div className="space-y-3">
        {historyItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0"
          >
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                <span className="text-gray-600">📄</span>
              </div>
              <div>
                <p className="font-medium text-gray-900">
                  {item.id} {item.status}
                </p>
              </div>
            </div>
            <span className="text-sm text-gray-500">{item.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
