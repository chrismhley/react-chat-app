import { useState } from "react";
import Sidebar from "./components/Sidebar";
import ChatList from "./components/ChatList";
import MessagePane from "./components/MessagePane";
import CreateChatModal from "./components/CreateChatModal";
import { ChatsProvider } from "./contexts/ChatsContext";
import { MessagesProvider } from "./contexts/MessagesContext";
import { UserProvider } from "./contexts/UserContext";
import "./App.css";

const App = () => {
  const [isCreateChatModalOpen, setIsModalOpen] = useState(false);

  const openCreateChatModal = () => setIsModalOpen(true);
  const closeCreateChatModal = () => setIsModalOpen(false);

  return (
    <UserProvider>
      <ChatsProvider>
        <MessagesProvider>
          <div className="app-container">
            <Sidebar>
              <ChatList openCreateChatModal={openCreateChatModal} />
            </Sidebar>
            <MessagePane />
            <CreateChatModal
              isOpen={isCreateChatModalOpen}
              onClose={closeCreateChatModal}
            />
          </div>
        </MessagesProvider>
      </ChatsProvider>
    </UserProvider>
  );
};

export default App;
