interface SaveButtonProps {
  onClick?: () => void;
}

export default function SaveButton({ onClick }: SaveButtonProps) {
  return (
    <button
      onClick={onClick}
      className="bg-[#6E62E5] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#5751D1] transition-colors"
    >
      Save Changes
    </button>
  );
}
