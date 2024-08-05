// Backend Data
export interface Chat {
  id: string;
  name: string;
  isDefault?: boolean;
}

export interface Message {
  id: string;
  chatId: string;
  senderId: string;
  senderName: string;
  content: string;
  timestamp: number;
}

export interface User {
  id: string;
  name: string;
}

// Contexts
export interface ChatsContextType {
  chats: Chat[];
  selectedChatId: string | null;
  isEditing: boolean;
  addChat: (name: string) => void;
  deleteChat: (id: string) => void;
  setSelectedChatId: (id: string | null) => void;
  toggleEditing: () => void;
}

export interface MessagesContextType {
  messages: { [chatId: string]: Message[] };
  sendMessage: (chatId: string, content: string) => void;
  deleteMessagesForChat: (chatId: string) => void;
}

export interface UserContextType {
  userId: string;
  userName: string;
}