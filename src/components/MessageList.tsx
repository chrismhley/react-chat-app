import { useChatsContext } from "../hooks/useChatsContext";
import { useMessagesContext } from "../hooks/useMessagesContext";
import MessageListItem from "./MessageListItem";

const MessageList = () => {
  const { selectedChatId } = useChatsContext();
  const { messages } = useMessagesContext();

  const chatMessages = selectedChatId ? messages[selectedChatId] || [] : [];

  return selectedChatId ? (
    chatMessages && chatMessages.length > 0 ? (
      <div className="message-list">
        {chatMessages.map((message) => (
          <MessageListItem key={message.id} message={message} />
        ))}
      </div>
    ) : (
      <div className="message-list-empty">
        Be the first one to send a message!
      </div>
    )
  ) : (
    <div className="message-list-empty">Create a chat to start messaging</div>
  );
};

export default MessageList;
