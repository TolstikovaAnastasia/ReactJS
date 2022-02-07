import React from 'react';
import Message from './Messages/Messages';

export const MessageList = ({ messages }) => (
    <div className='messageForm'>
        {messages.map(({ text, author, id }) => (
            <Message key={id} author={author} text={text} />
        ))}
    </div>
)