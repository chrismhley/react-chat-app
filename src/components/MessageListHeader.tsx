import { useChatsContext } from "../hooks/useChatsContext";

const MessageListHeader = () => {
  const { chats, selectedChatId } = useChatsContext();

  const selectedChat = chats.find((chat) => chat.id === selectedChatId);

  return (
    <div className="message-list-header">
      <h2>{selectedChat ? selectedChat.name : "Select a chat"}</h2>
    </div>
  );
};

export default MessageListHeader;
