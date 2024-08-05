import { useState } from "react";
import { useChatsContext } from "../hooks/useChatsContext";

interface CreateChatModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CreateChatModal = ({ isOpen, onClose }: CreateChatModalProps) => {
  const [newChatName, setNewChatName] = useState("");
  const { addChat } = useChatsContext();

  if (!isOpen) return null;

  const handleSubmit = () => {
    if (newChatName.trim()) {
      addChat(newChatName.trim());
      setNewChatName("");
      onClose();
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Create New Chat</h2>
        <input
          type="text"
          value={newChatName}
          onChange={(e) => setNewChatName(e.target.value)}
          placeholder="Enter chat name"
        />
        <div className="modal-buttons">
          <button onClick={handleSubmit}>Create</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default CreateChatModal;
