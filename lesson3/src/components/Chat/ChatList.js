import React from 'react';
import { List } from '@mui/material';
import { ListItem } from '@mui/material';

export const ChatList = () => {

    const chatList = [
        {
            title: 'news',
            id: Date.now()
        },
        {
            title: 'music',
            id: Date.now()
        },
        {
            title: 'movies',
            id: Date.now()
        },
    ];

    return (
        <>
            <List>
                {chatList.map(({title}) => (
                    <ListItem key={Date.now()}>
                        {title}
                    </ListItem>
                ))}
            </List>
        </>
    )
}