import ChatMessages from "../molecules/ChatMessages";
import ChatInput from "../molecules/ChatInput";

interface ChatMessage {
  id: number;
  text: string;
  sender: "user" | "support";
  time: string;
}

interface LiveChatWidgetProps {
  isOpen: boolean;
  messages: ChatMessage[];
  inputValue: string;
  onClose: () => void;
  onInputChange: (value: string) => void;
  onSendMessage: () => void;
}

export default function LiveChatWidget({
  isOpen,
  messages,
  inputValue,
  onClose,
  onInputChange,
  onSendMessage,
}: LiveChatWidgetProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed bottom-20 right-6 w-80 bg-white rounded-lg shadow-xl border border-gray-200">
      <div className="p-4 border-b border-gray-200 flex justify-between items-center">
        <h3 className="font-semibold text-gray-800">Live Chat Help</h3>
        <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
          ✕
        </button>
      </div>

      <ChatMessages messages={messages} />

      <ChatInput
        value={inputValue}
        onChange={onInputChange}
        onSend={onSendMessage}
      />
    </div>
  );
}
