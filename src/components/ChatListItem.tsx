import { useState } from "react";
import { useChatsContext } from "../hooks/useChatsContext";
import { Chat } from "../types";

type ChatListItemProps = {
  chatInfo: Chat;
  onSelect: () => void;
  onDelete: () => void;
};

const ChatListItem = ({ chatInfo, onSelect, onDelete }: ChatListItemProps) => {
  const { isEditing, selectedChatId } = useChatsContext();
  const [isHovered, setIsHovered] = useState(false);
  const isSelected = selectedChatId === chatInfo.id;

  const canDelete = !chatInfo.isDefault;

  return (
    <div
      className={`chat-list-item ${isSelected ? "selected" : ""} ${
        isHovered ? "hovered" : ""
      }`}
      onClick={onSelect}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="unselectable">{chatInfo.name}</span>
      {isEditing && canDelete && (
        <button
          className="delete-button"
          onClick={(e) => {
            e.stopPropagation();
            onDelete();
          }}
        >
          X
        </button>
      )}
    </div>
  );
};

export default ChatListItem;
