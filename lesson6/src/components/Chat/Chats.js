import React, { useEffect, useMemo } from 'react';
import { Navigate, useParams } from 'react-router';
import { FormComponent } from '../FormComponent/FormComponent';
import { MessageList } from '../MessageList/MessageList';
import { USERS } from '../../utils/constant';
import { addMessage } from '../../store/messages/action';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { selectMessagesByChatId, selectMessages } from '../../store/messages/selectors';
import './Chats.css';

export function Chats() {
    const { chatId } = useParams();
    const messages = useSelector(selectMessages, shallowEqual);
    const dispatch = useDispatch();

    const getMessagesByChatId = useMemo(() => selectMessagesByChatId(chatId), [chatId]);

    const messagesForCurrentChat = useSelector(getMessagesByChatId, shallowEqual);

    const onAddMessage = (newMessage, chatId) => {
        dispatch(addMessage(newMessage, chatId));
    };

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
        };
    }, [messages]);

    if (!messages[chatId]) {
        return <Navigate to="/chats" replace />;
    };

    return (
        <>
          <div className="chats">
            <div className="chatList">
              <FormComponent onSubmit={handleSubmit} />
              <MessageList messages={messagesForCurrentChat} />
            </div>
          </div>
        </>
    );
}