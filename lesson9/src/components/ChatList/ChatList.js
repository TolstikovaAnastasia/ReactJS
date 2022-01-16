import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { List } from '@mui/material';
//import { useDispatch, useSelector } from 'react-redux';
import { FormComponent } from '../FormComponent/FormComponent';
//import { addChat } from '../../store/chats/action';
//import { selectChats } from '../../store/chats/selectors';
import { ChatItem } from './ChatItem/ChatItem';
import { onValue, set } from 'firebase/database';
import { chatsRef, getChatsRefById, getMsgsRefById } from '../../service/firebase';

export const ChatList = () => {
    //const chats = useSelector(selectChats);
    //const dispatch = useDispatch();

    const [fbChats, setFbChats] = useState([]);

    useEffect(() => {
        onValue(chatsRef, (snapshot) => {
            const newChats = [];
            
            snapshot?.forEach((chat) => {
                newChats.push(chat.val());
            });

            setFbChats(newChats);
        });
    }, []);

    const onAddChat = (newChatName) => {
        const newId = `chat${Date.now()}`;
        const newChat = {
            id: newId,
            name: newChatName,
        };
        //dispatch(addChat(newChat));
        set(getChatsRefById(newId), newChat);
        set(getMsgsRefById(newId), { empty: true });
    };

    const handleDeleteChat = (id) => {
        set(getChatsRefById(id), null);
    };

    return (
        <>
            <List>
                {fbChats.map((chat) => (
                    <ChatItem key={chat.id} chat={chat} onDelete={handleDeleteChat} />
                ))}
                <FormComponent onSubmit={onAddChat} />
            </List>
            <Outlet />
        </>
    );
};