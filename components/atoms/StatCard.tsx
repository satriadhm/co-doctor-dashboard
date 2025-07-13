interface StatCardProps {
  title: string;
  value: string;
  icon: string;
  color: "green" | "red" | "yellow";
}

export default function StatCard({ title, value, icon, color }: StatCardProps) {
  const colorClasses = {
    green: "bg-green-100 text-green-600",
    red: "bg-red-100 text-red-600",
    yellow: "bg-yellow-100 text-yellow-600",
  };

  const borderClasses = {
    green: "border-l-green-500",
    red: "border-l-red-500",
    yellow: "border-l-yellow-500",
  };

  return (
    <div
      className={`bg-white rounded-lg p-6 shadow-sm border-l-4 ${borderClasses[color]}`}
    >
      <div className="flex items-start justify-between mb-4">
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center text-lg ${colorClasses[color]}`}
        >
          {icon}
        </div>
      </div>
      <div className="space-y-2">
        <p className="text-sm text-gray-600 font-medium">{title}</p>
        <p className="text-3xl font-bold text-gray-900">{value}</p>
      </div>
    </div>
  );
}
