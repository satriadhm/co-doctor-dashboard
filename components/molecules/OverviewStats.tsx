import StatCard from "../atoms/StatCard";

export default function OverviewStats() {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard title="Processed" value="200.000" icon="✓" color="green" />
        <StatCard
          title="Error Detection"
          value="150.000"
          icon="✕"
          color="red"
        />
        <StatCard
          title="Waiting Review"
          value="50.000"
          icon="⏳"
          color="yellow"
        />
      </div>
    </div>
  );
}
