import React from 'react';
import { Outlet } from 'react-router-dom';
import { List } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { FormComponent } from '../FormComponent/FormComponent';
import { addChat } from '../../store/chats/action';
import { selectChats } from '../../store/chats/selectors';
import { ChatItem } from './ChatItem/ChatItem';

export const ChatList = () => {
    const chats = useSelector(selectChats);
    const dispatch = useDispatch();

    const onAddChat = (newChatName) => {
        const newId = `chat${Date.now()}`;
        const newChat = {
            id: newId,
            name: newChatName,
        };
        dispatch(addChat(newChat));
    };

    return (
        <>
            <List>
                {chats.map((chat) => (
                    <ChatItem key={chat.id} chat={chat} />
                ))}
                <FormComponent onSubmit={onAddChat} />
            </List>
            <Outlet />
        </>
    )
}