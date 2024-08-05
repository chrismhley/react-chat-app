import ChatListItem from "./ChatListItem";
import ChatListHeader from "./ChatListHeader";
import { useChatsContext } from "../hooks/useChatsContext";

interface ChatListProps {
  openCreateChatModal: () => void;
}

const ChatList = ({ openCreateChatModal }: ChatListProps) => {
  const { chats, setSelectedChatId, deleteChat } = useChatsContext();

  return (
    <>
      <ChatListHeader openCreateChatModal={openCreateChatModal} />
      <div className="chat-list">
        {chats.map((chat) => (
          <ChatListItem
            key={chat.id}
            chatInfo={chat}
            onSelect={() => setSelectedChatId(chat.id)}
            onDelete={() => deleteChat(chat.id)}
          />
        ))}
      </div>
    </>
  );
};

export default ChatList;
