import CreateChatButton from "./CreateChatButton";
import EditChatListButton from "./EditChatListButton";

interface ChatListHeaderProps {
  openCreateChatModal: () => void;
}

const ChatListHeader = ({ openCreateChatModal }: ChatListHeaderProps) => {
  return (
    <div className="chat-list-header">
      <h2>Chats</h2>
      <div className="header-buttons">
        <EditChatListButton />
        <CreateChatButton openModal={openCreateChatModal} />
      </div>
    </div>
  );
};

export default ChatListHeader;
