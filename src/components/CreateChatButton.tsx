interface CreateChatButtonProps {
  openModal: () => void;
}

const CreateChatButton = ({ openModal }: CreateChatButtonProps) => {
  return (
    <button className="create-chat-button" onClick={openModal}>
      +
    </button>
  );
};

export default CreateChatButton;
