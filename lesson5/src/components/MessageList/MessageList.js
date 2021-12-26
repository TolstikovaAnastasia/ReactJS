import React from 'react';
import { USERS } from '../../utils/constant';

export const MessageList = ({messages}) => (
    <div className='messageForm'>
        {messages.map(({text, author, id}) => (
            <ul key={id} className={author === USERS.YOU ? 'you-msg' : 'bot-msg'}>
                {author}: {text}
            </ul>
        ))}
    </div>
);