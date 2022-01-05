import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Chats } from '../components/Chat/Chats';
import { ChatList } from '../components/ChatList/ChatList';
import { Header } from '../components/Header/Header';
import { NoMatch } from './Error/Error';
import { Home } from './Home/Home';
import { Profile } from './Profile/Profile';

export const Router = () => (
    <BrowserRouter>
        <Header></Header>

        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='chats' element={<ChatList />}>
            <Route
                path=":chatId"
                element={<Chats />}
            />
            </Route>

            <Route path='*' element={NoMatch} />
        </Routes>
    </BrowserRouter>
);