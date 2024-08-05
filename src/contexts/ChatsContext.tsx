import { createContext, useState, PropsWithChildren } from "react";
import { Chat, ChatsContextType } from "../types";
import { v4 as uuidv4 } from "uuid";

export const ChatsContext = createContext<ChatsContextType | null>(null);

export const ChatsProvider = ({ children }: PropsWithChildren) => {
  const [chats, setChats] = useState<Chat[]>([]);
  const [selectedChatId, setSelectedChatId] = useState<string | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  const addChat = (name: string) => {
    const newChat: Chat = { id: uuidv4(), name };
    setChats((prevChats) => [...prevChats, newChat]);
    setSelectedChatId(newChat.id);
  };

  const deleteChat = (id: string) => {
    setChats((prevChats) => {
      const newChats = prevChats.filter((chat) => chat.id !== id);
      if (selectedChatId === id) {
        setSelectedChatId(newChats.length > 0 ? newChats[0].id : null);
      }
      return newChats;
    });
  };

  const toggleEditing = () => setIsEditing((prev) => !prev);

  const value: ChatsContextType = {
    chats,
    selectedChatId,
    isEditing,
    addChat,
    deleteChat,
    setSelectedChatId,
    toggleEditing,
  };

  return (
    <ChatsContext.Provider value={value}>{children}</ChatsContext.Provider>
  );
};
