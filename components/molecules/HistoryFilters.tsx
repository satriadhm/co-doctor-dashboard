import FilterDropdown from "../atoms/FilterDropdown";

interface HistoryFiltersProps {
  timeFilter: string;
  statusFilter: string;
  onTimeFilterChange: (value: string) => void;
  onStatusFilterChange: (value: string) => void;
}

export default function HistoryFilters({
  timeFilter,
  statusFilter,
  onTimeFilterChange,
  onStatusFilterChange,
}: HistoryFiltersProps) {
  const timeOptions = [
    "This Month",
    "Last Month",
    "Last 3 Months",
    "Last 6 Months",
  ];
  const statusOptions = ["Today", "Yesterday", "Last Week", "Last Month"];

  return (
    <div className="flex gap-4">
      <FilterDropdown
        value={timeFilter}
        options={timeOptions}
        onChange={onTimeFilterChange}
      />
      <FilterDropdown
        value={statusFilter}
        options={statusOptions}
        onChange={onStatusFilterChange}
      />
    </div>
  );
}
