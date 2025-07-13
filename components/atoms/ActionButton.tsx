interface ActionButtonProps {
  action: "View Details" | "Download";
  onClick: () => void;
}

export default function ActionButton({ action, onClick }: ActionButtonProps) {
  return (
    <button
      onClick={onClick}
      className="text-[#6E62E5] text-sm font-medium hover:underline"
    >
      {action}
    </button>
  );
}
