import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Chats } from '../components/Chat/Chats';
import { ChatList } from '../components/ChatList/ChatList';
import { Header } from '../components/Header/Header';
import { NoMatch } from './Error/Error';
import { Home } from './Home/Home';
import { Profile } from './Profile/Profile';

const initialChats = [
    {
        id: 'chat1',
        name: 'movies',
    },
    {
        id: 'chat2',
        name: 'news',
    },
    {
        id: 'chat3',
        name: 'music',
    },
];

const initialMessages = initialChats.reduce((acc, chat) => {
    acc[chat.id] = [];
    return acc;
}, {});

export const Router = () => {
    const [chats, setChats] = useState(initialChats);
    const [messages, setMessages] = useState(initialMessages);

    const handleAddMessage = (newMessage, chatId) => {
        setMessages((prevMessages) => ({
            ...prevMessages,
            [chatId] : [...prevMessages[chatId], newMessage],
        }));
    };

    return (
        <BrowserRouter>
            <Header></Header>

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/chats' element={<ChatList chats={chats} />}>
                <Route
                    path=":chatId"
                    element={<Chats messages={messages} onAddMessage={handleAddMessage} />}
                />
                </Route>

                <Route path='*' element={NoMatch} />
            </Routes>
        </BrowserRouter>
    );
};