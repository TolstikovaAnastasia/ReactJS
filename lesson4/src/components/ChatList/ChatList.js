import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { List } from '@mui/material';
import { ListItem } from '@mui/material';

export const ChatList = ({chats}) => {
    return (
        <>
            <List>
                {chats.map((chat) => (
                    <ListItem key={chat.id}>
                        <Link to={`/chats/${chat.id}`}>{chat.name}</Link>
                    </ListItem>
                ))}
            </List>
            <Outlet />
        </>
    )
}