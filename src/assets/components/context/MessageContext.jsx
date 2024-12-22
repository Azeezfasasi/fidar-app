import React, { createContext, useState, useEffect, useContext } from 'react';
// import { UserContext } from '../.context/ProfileContext';
import { UserContext } from './UserContext';


// Create the Message Context
export const MessageContext = createContext();


export const MessageProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);
  const [deletedMessages, setDeletedMessages] = useState([]);
  // const {currentUser, setCurrentUser } = useContext(UserContext);


  // Load messages from localStorage on initial load
  useEffect(() => {
    const storedMessages = localStorage.getItem('messages');
    if (storedMessages) {
      setMessages(JSON.parse(storedMessages));
    }
  }, []);
  

  // Save messages to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('messages', JSON.stringify(messages));
  }, [messages]);

  // Function to send a new message
  const sendMessage = (message, recipient) => {
    const newMessage = {
      ...message,
      id: Date.now(),  // Assign a unique ID
      date: new Date().toLocaleString(),  // Add the current date
      status: 'Pending', // New messages are "pending" by default
      replies: message.replies || []  // Ensure replies are an empty array initially
    };
    const newMessages = [...messages, newMessage];
    setMessages(newMessages);
  };
  
  // Function to reply to a message
  const replyMessage = (replyContent, messageId) => {
    const reply = {
      id: Date.now(),  // Unique ID for the reply
      content: replyContent,
      date: new Date().toLocaleString()  // Add the current date to the reply
    };
    
    const updatedMessages = messages.map((message) =>
      message.id === messageId ? { ...message, replies: [...message.replies, reply] } : message
    );
    setMessages(updatedMessages);
  };

  // Function to approve a message
  const approveMessage = (messageId) => {
    const updatedMessages = messages.map((message) =>
      message.id === messageId ? { ...message, status: 'Approved' } : message
    );
    setMessages(updatedMessages);
  };

  // Function to decline a message
  const declineMessage = (messageId) => {
    const updatedMessages = messages.map((message) =>
      message.id === messageId ? { ...message, status: 'Declined' } : message
    );
    setMessages(updatedMessages);
  };

  // Function to delete a message (move it to the deletedMessages array)
  const deleteMessage = (messageId) => {
    const messageToDelete = messages.find((message) => message.id === messageId);
    if (messageToDelete) {
      setDeletedMessages([...deletedMessages, messageToDelete]);
      setMessages(messages.filter((message) => message.id !== messageId));
    }
  };

  // Function to restore a deleted message
  const restoreMessage = (messageId) => {
    const messageToRestore = deletedMessages.find((message) => message.id === messageId);
    if (messageToRestore) {
      setMessages([...messages, messageToRestore]);
      setDeletedMessages(deletedMessages.filter((message) => message.id !== messageId));
    }
  };

  return (
    <MessageContext.Provider value={{ messages, sendMessage, replyMessage, approveMessage, declineMessage, deleteMessage, restoreMessage, deletedMessages }}>
      {children}
    </MessageContext.Provider>
  );
};
