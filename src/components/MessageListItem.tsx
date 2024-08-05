import { Message } from "../types";

interface MessageListItemProps {
  message: Message;
}

const MessageListItem = ({ message }: MessageListItemProps) => {
  return (
    <div className="message-list-item">
      <div className="message-info">
        <span className="message-sender">{message.senderName}</span>
        <span className="message-time">
          {new Date(message.timestamp).toLocaleTimeString()}
        </span>
      </div>
      <div className="message-content">{message.content}</div>
    </div>
  );
};

export default MessageListItem;
