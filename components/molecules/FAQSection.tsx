import FAQItem from "../atoms/FAQItem";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqData: FAQ[];
  expandedFAQ: number | null;
  onToggleFAQ: (index: number) => void;
}

export default function FAQSection({
  faqData,
  expandedFAQ,
  onToggleFAQ,
}: FAQSectionProps) {
  return (
    <div className="w-full">
      <div className="flex items-center mb-6">
        <span className="text-red-500 mr-2">🧠</span>
        <h1 className="text-xl font-semibold text-gray-800">
          Frequently Asked Questions (FAQ)
        </h1>
      </div>

      <div className="space-y-3">
        {faqData.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isExpanded={expandedFAQ === index}
            isFirst={index === 0}
            onToggle={() => onToggleFAQ(index)}
          />
        ))}
      </div>
    </div>
  );
}
