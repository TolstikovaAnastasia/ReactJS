import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { List } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { FormComponent } from '../FormComponent/FormComponent';
import { selectChats } from '../../store/chats/selectors';
import { ChatItem } from './ChatItem/ChatItem';
import { addChatsWithFb, deleteChatWithFb, initChatsTracking } from '../../store/chats/action';
import { initMsgsTracking } from '../../store/messages/action';

export const ChatList = () => {
    const chats = useSelector(selectChats);
    const dispatch = useDispatch();

    useEffect(() => {
       dispatch(initChatsTracking());
       dispatch(initMsgsTracking());
    }, []);

    const onAddChat = (newChatName) => {
        addChatsWithFb(newChatName);
    };

    const handleDeleteChat = (id) => {
        dispatch(deleteChatWithFb(id));
    };

    return (
        <>
            <List>
                {chats.map((chat) => (
                    <ChatItem key={chat.id} chat={chat} onDelete={handleDeleteChat} />
                ))}
                <FormComponent onSubmit={onAddChat} />
            </List>
            <Outlet />
        </>
    );
};