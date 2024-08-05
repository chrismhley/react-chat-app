import MessageList from "./MessageList";
import MessageListHeader from "./MessageListHeader";
import ChatInput from "./ChatInput";

const MessagePane = () => {
  return (
    <div className="message-pane">
      <MessageListHeader />
      <MessageList />
      <ChatInput />
    </div>
  );
};

export default MessagePane;
