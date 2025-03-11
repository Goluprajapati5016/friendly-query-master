
import React from "react";
import { cn } from "@/lib/utils";
import AnimatedText from "./AnimatedText";

export type MessageType = {
  id: string;
  content: string;
  role: "user" | "assistant";
  timestamp: Date;
};

interface ChatMessageProps {
  message: MessageType;
  animate?: boolean;
  isLast?: boolean;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ 
  message, 
  animate = false,
  isLast = false
}) => {
  const isUser = message.role === "user";
  
  return (
    <div 
      className={cn(
        "flex w-full mb-4 animate-slide-up",
        isUser ? "justify-end" : "justify-start"
      )}
    >
      <div
        className={cn(
          "chat-bubble",
          isUser ? "chat-bubble-user" : "chat-bubble-assistant"
        )}
      >
        {animate && !isUser && isLast ? (
          <AnimatedText text={message.content} speed={15} />
        ) : (
          <span>{message.content}</span>
        )}
        <div className={cn(
          "text-xs mt-1 opacity-60",
          isUser ? "text-right" : "text-left"
        )}>
          {new Date(message.timestamp).toLocaleTimeString([], { 
            hour: '2-digit', 
            minute: '2-digit' 
          })}
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
