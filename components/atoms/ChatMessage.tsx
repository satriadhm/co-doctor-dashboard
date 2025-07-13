interface ChatMessageProps {
  text: string;
  sender: "user" | "support";
  time: string;
}

export default function ChatMessage({ text, sender, time }: ChatMessageProps) {
  return (
    <div
      className={`flex ${sender === "user" ? "justify-end" : "justify-start"}`}
    >
      <div
        className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
          sender === "user"
            ? "bg-[#6E62E5] text-white"
            : "bg-gray-100 text-gray-800"
        }`}
      >
        {text}
        <div
          className={`text-xs mt-1 ${
            sender === "user" ? "text-purple-200" : "text-gray-500"
          }`}
        >
          {time}
        </div>
      </div>
    </div>
  );
}
