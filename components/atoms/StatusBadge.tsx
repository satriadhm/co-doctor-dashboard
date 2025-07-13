interface StatusBadgeProps {
  status: "Waiting for Review" | "Fully Corrected" | "Draft";
}

export default function StatusBadge({ status }: StatusBadgeProps) {
  const getStatusStyles = () => {
    switch (status) {
      case "Waiting for Review":
        return "text-gray-600";
      case "Fully Corrected":
        return "text-gray-600";
      case "Draft":
        return "text-gray-600";
      default:
        return "text-gray-600";
    }
  };

  return <span className={`text-sm ${getStatusStyles()}`}>{status}</span>;
}
