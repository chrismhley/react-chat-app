import { createContext, useState, PropsWithChildren } from "react";
import { Message, MessagesContextType } from "../types";
import { v4 as uuidv4 } from "uuid";
import { useUserContext } from "../hooks/useUserContext";

export const MessagesContext = createContext<MessagesContextType | null>(null);

const simulatedRandomThreshold = { min: 1000, randomMax: 4000 };

export const MessagesProvider = ({ children }: PropsWithChildren) => {
  const [messages, setMessages] = useState<{ [chatId: string]: Message[] }>({});
  const { userId, userName } = useUserContext();

  const simulateReceivedMessage = (chatId: string) => {
    setTimeout(() => {
      const newMessage: Message = {
        id: uuidv4(),
        chatId,
        senderId: "system",
        senderName: "System",
        content: `Simulated message for chat ${chatId}`,
        timestamp: Date.now(),
      };
      setMessages((prevMessages) => ({
        ...prevMessages,
        [chatId]: [...(prevMessages[chatId] || []), newMessage],
      }));
    }, Math.random() * simulatedRandomThreshold.randomMax + simulatedRandomThreshold.min);
  };

  const sendMessage = (chatId: string, content: string) => {
    const newMessage: Message = {
      id: uuidv4(),
      chatId,
      senderId: userId,
      senderName: userName,
      content,
      timestamp: Date.now(),
    };
    setMessages((prevMessages) => ({
      ...prevMessages,
      [chatId]: [...(prevMessages[chatId] || []), newMessage],
    }));
    simulateReceivedMessage(chatId);
  };

  const deleteMessagesForChat = (chatId: string) => {
    setMessages((prevMessages) => {
      const newMessages = { ...prevMessages };
      delete newMessages[chatId];
      return newMessages;
    });
  };

  const value: MessagesContextType = {
    messages,
    sendMessage,
    deleteMessagesForChat,
  };

  return (
    <MessagesContext.Provider value={value}>
      {children}
    </MessagesContext.Provider>
  );
};
