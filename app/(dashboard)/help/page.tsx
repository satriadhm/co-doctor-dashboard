"use client";

import { useState } from "react";
import { faqData } from "../../../constants/faqData";
import { FAQSection } from "../../../components/molecules";
import { LiveChatWidget } from "../../../components/organisms";
import { ChatToggleButton } from "../../../components/atoms";

export default function HelpPage() {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(0);
  const [chatMessage, setChatMessage] = useState("");
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState<
    Array<{
      id: number;
      text: string;
      sender: "user" | "support";
      time: string;
    }>
  >([
    {
      id: 1,
      text: "Hi, I just uploaded a clinical note but didn't receive any error feedback. What should I do?",
      sender: "user",
      time: "2min",
    },
    {
      id: 2,
      text: "Hi there! 😊 Let me help you with that. Could you confirm the file type and whether the note is in English?",
      sender: "support",
      time: "1min",
    },
  ]);

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  const sendMessage = () => {
    if (chatMessage.trim()) {
      setChatMessages([
        ...chatMessages,
        {
          id: chatMessages.length + 1,
          text: chatMessage,
          sender: "user" as const,
          time: "now",
        },
      ]);
      setChatMessage("");
    }
  };

  return (
    <div className="flex-1 p-6 bg-gray-50 relative">
      <FAQSection
        faqData={faqData}
        expandedFAQ={expandedFAQ}
        onToggleFAQ={toggleFAQ}
      />

      <LiveChatWidget
        isOpen={isChatOpen}
        messages={chatMessages}
        inputValue={chatMessage}
        onClose={() => setIsChatOpen(false)}
        onInputChange={setChatMessage}
        onSendMessage={sendMessage}
      />

      <ChatToggleButton
        isOpen={isChatOpen}
        onClick={() => setIsChatOpen(!isChatOpen)}
      />
    </div>
  );
}
