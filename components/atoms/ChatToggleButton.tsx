interface ChatToggleButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export default function ChatToggleButton({
  isOpen,
  onClick,
}: ChatToggleButtonProps) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 w-12 h-12 bg-[#6E62E5] text-white rounded-full shadow-lg hover:bg-[#5751D1] transition-colors flex items-center justify-center"
    >
      <span className="text-lg">{isOpen ? "✕" : "💬"}</span>
    </button>
  );
}
