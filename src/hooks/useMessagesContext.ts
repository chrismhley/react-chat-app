import { useContext } from 'react';
import { MessagesContext } from '../contexts/MessagesContext';

export const useMessagesContext = () => {
  const context = useContext(MessagesContext);
  if (!context) {
    throw new Error('useMessagesContext must be used within a MessagesProvider');
  }
  return context;
};