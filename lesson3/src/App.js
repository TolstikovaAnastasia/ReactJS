import React from 'react';
import { ChatList } from './components/Chat/ChatList';
import { MessageList } from './components/MessageList/MessageList';
import './App.css';

function App() {
  
  return (
    <div className='App'>
      <ChatList />
      <MessageList />
    </div>
  );
};

export default App;
