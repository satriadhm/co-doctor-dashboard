import ChatMessage from "../atoms/ChatMessage";

interface ChatMessage {
  id: number;
  text: string;
  sender: "user" | "support";
  time: string;
}

interface ChatMessagesProps {
  messages: ChatMessage[];
}

export default function ChatMessages({ messages }: ChatMessagesProps) {
  return (
    <div className="h-64 overflow-y-auto p-4 space-y-3">
      {messages.map((message) => (
        <ChatMessage
          key={message.id}
          text={message.text}
          sender={message.sender}
          time={message.time}
        />
      ))}
    </div>
  );
}
