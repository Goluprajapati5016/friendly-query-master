
import React, { useRef, useEffect } from "react";
import ChatMessage, { MessageType } from "./ChatMessage";

interface ChatContainerProps {
  messages: MessageType[];
  loading?: boolean;
}

const ChatContainer: React.FC<ChatContainerProps> = ({ 
  messages,
  loading = false
}) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="flex-1 overflow-y-auto p-4">
      {messages.length === 0 ? (
        <div className="flex items-center justify-center h-full text-center text-muted-foreground">
          <div className="max-w-md">
            <h2 className="text-xl font-medium mb-2">Welcome to Minimalist AI Chat</h2>
            <p>Ask me anything and I'll provide a thoughtful response. I'm designed to be helpful, accurate, and considerate.</p>
          </div>
        </div>
      ) : (
        <>
          {messages.map((message, index) => (
            <ChatMessage 
              key={message.id} 
              message={message} 
              animate={message.role === "assistant"}
              isLast={index === messages.length - 1}
            />
          ))}
          {loading && (
            <div className="flex justify-start mb-4 animate-pulse">
              <div className="chat-bubble chat-bubble-assistant">
                <span className="flex space-x-1.5">
                  <span className="w-2 h-2 rounded-full bg-current animate-pulse"></span>
                  <span className="w-2 h-2 rounded-full bg-current animate-pulse" style={{ animationDelay: "0.2s" }}></span>
                  <span className="w-2 h-2 rounded-full bg-current animate-pulse" style={{ animationDelay: "0.4s" }}></span>
                </span>
              </div>
            </div>
          )}
        </>
      )}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default ChatContainer;
