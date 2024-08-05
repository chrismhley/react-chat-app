import { useChatsContext } from "../hooks/useChatsContext";

const EditChatListButton = () => {
  const { isEditing, toggleEditing } = useChatsContext();

  return (
    <button className="edit-button" onClick={toggleEditing}>
      {isEditing ? "✓" : "..."}
    </button>
  );
};

export default EditChatListButton;
