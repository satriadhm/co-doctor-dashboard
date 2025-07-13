interface ChatInputProps {
  value: string;
  onChange: (value: string) => void;
  onSend: () => void;
}

export default function ChatInput({ value, onChange, onSend }: ChatInputProps) {
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      onSend();
    }
  };

  return (
    <div className="p-4 border-t border-gray-200">
      <div className="flex items-center space-x-2">
        <button className="text-gray-400 hover:text-gray-600">
          <span className="text-lg">+</span>
        </button>
        <input
          type="text"
          value={value}
          onChange={e => onChange(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type your message"
          className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#6E62E5] focus:border-transparent"
        />
        <button
          onClick={onSend}
          className="bg-[#6E62E5] text-white px-3 py-2 rounded-lg hover:bg-[#5751D1] transition-colors"
        >
          <span className="text-sm">→</span>
        </button>
      </div>
    </div>
  );
}
