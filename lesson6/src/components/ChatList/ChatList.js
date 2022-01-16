import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { List } from '@mui/material';
import { ListItem } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { FormComponent } from '../FormComponent/FormComponent';
import { addChat } from '../../store/chats/action';
import { selectChats } from '../../store/chats/selectors';

export const ChatList = () => {
    const chats = useSelector(selectChats);
    const dispatch = useDispatch();

    const onAddChat = (newChatName) => {
        const newId = `chats${Date.now()}`;
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
                    <ListItem key={chat.id}>
                        <Link style={{textDecoration: 'none'}} to={`/chats/${chat.id}`}>{chat.name}</Link>
                    </ListItem>
                ))}
                <FormComponent onSubmit={onAddChat} />
            </List>
            <Outlet />
        </>
    )
}