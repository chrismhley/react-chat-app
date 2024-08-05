import { useState } from "react";
import { useChatsContext } from "../hooks/useChatsContext";
import { useMessagesContext } from "../hooks/useMessagesContext";

const ChatInput = () => {
  const [inputMessage, setInputMessage] = useState("");

  const { selectedChatId } = useChatsContext();
  const { sendMessage } = useMessagesContext();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputMessage.trim() && selectedChatId) {
      sendMessage(selectedChatId, inputMessage.trim());
      setInputMessage("");
    }
  };

  if (!selectedChatId) {
    return null;
  }

  return (
    <form className="chat-input-container" onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputMessage}
        onChange={(e) => setInputMessage(e.target.value)}
        placeholder="Type a message..."
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default ChatInput;
