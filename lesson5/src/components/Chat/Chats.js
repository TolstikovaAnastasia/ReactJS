import React, { useEffect } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { FormComponent } from '../FormComponent/FormComponent';
import { MessageList } from '../MessageList/MessageList';
import { USERS } from '../../utils/constant';
import './Chats.css';

export function Chats({ messages, onAddMessage }) {
    const {chatId} = useParams();
    const navigate = useNavigate();

    const handleSubmit = (text) => {
        const newMessage = { text, author: USERS.YOU, id: `msg-${Date.now()}` };
        onAddMessage(newMessage, chatId);
    };

    useEffect(() => {
        let timerId;
        if(messages[chatId]?.[messages[chatId].length - 1]?.author === USERS.YOU) {
            timerId = setTimeout(() => {
                onAddMessage(
                    {
                        text: 'Ваше сообщение могут видеть все участники чата',
                        author: USERS.BOT,
                        id: `msg-${Date.now()}`,
                    },
                    chatId
                );
            }, 2500);
        }
        return () => {
            clearTimeout(timerId);
        }
    }, [messages]);

    if (!messages[chatId]) {
        return <Navigate to="/chats" replace />;
    };

    return (
        <>
          <div className="chats">
            <div className="chatList">
              <FormComponent onSubmit={handleSubmit} />
              <MessageList messages={messages[chatId]} />
            </div>
          </div>
        </>
    );
}