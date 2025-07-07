interface StatCardProps {
  title: string;
  value: string;
  icon: string;
  color: "green" | "red" | "yellow";
}

export default function StatCard({ title, value, icon, color }: StatCardProps) {
  const colorClasses = {
    green: "text-green-600",
    red: "text-red-600", 
    yellow: "text-yellow-600"
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border">
      <div className="flex items-center justify-between mb-4">
        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${colorClasses[color]}`}>
          {icon}
        </div>
      </div>
      <div className="space-y-1">
        <p className="text-sm text-gray-600">{title}</p>
        <p className="text-2xl font-bold text-gray-900">{value}</p>
      </div>
    </div>
  );
}
