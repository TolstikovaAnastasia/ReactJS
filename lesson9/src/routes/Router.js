import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Albums } from '../components/Albums/Albums';
import { Chats } from '../components/Chat/Chats';
import { ChatList } from '../components/ChatList/ChatList';
import { Header } from '../components/Header/Header';
import { initAuthTracking } from '../store/profile/action';
import { NoMatch } from './Error/Error';
import { Home } from './Home/Home';
import { Profile } from './Profile/Profile';
import { PublicOutlet } from '../components/PublicOutlet/publicOutlet';
import { PrivateOutlet } from '../components/PrivateOutlet/privateOutlet';

export const Router = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(initAuthTracking());
    }, []);

    return (
        <BrowserRouter>
            <Header></Header>

            <Routes>
                <Route path='/' element={<PublicOutlet />}>
                    <Route path='' element={<Home />} />
                    <Route path="signup" element={<Home isSignUp />} />
                </Route>
                <Route path='chats' element={<PrivateOutlet />}>
                    <Route path='' element={<ChatList />}>
                        <Route path=":chatId" element={<Chats />} />
                    </Route>
                </Route>
                <Route path='/profile' element={<PrivateOutlet />}>
                    <Route path='' element={<Profile />} />
                </Route>
                <Route path='/albums' element={<Albums />} />

                <Route path='*' element={NoMatch} />
            </Routes>
        </BrowserRouter>
    )
};