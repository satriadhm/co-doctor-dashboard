interface FAQItemProps {
  question: string;
  answer: string;
  isExpanded: boolean;
  isFirst?: boolean;
  onToggle: () => void;
}

export default function FAQItem({
  question,
  answer,
  isExpanded,
  isFirst = false,
  onToggle,
}: FAQItemProps) {
  return (
    <div className="bg-white rounded-lg border border-gray-200">
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
      >
        <span
          className={`font-medium ${
            isFirst ? "text-[#6E62E5]" : "text-gray-800"
          }`}
        >
          {question}
        </span>
        <span className="text-gray-400">{isExpanded ? "−" : "+"}</span>
      </button>
      {isExpanded && (
        <div className="px-6 pb-4 text-gray-600 leading-relaxed">{answer}</div>
      )}
    </div>
  );
}
