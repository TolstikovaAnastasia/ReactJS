import React, {useEffect, useState} from 'react';
import { FormComponent } from '../FormComponent/FormComponent';
import './MessageList.css';

export const MessageList = () => {
    const [messageList, setMessageList] = useState([]);

    const handleAddMessage = (newMessage) => {
        setMessageList(prevMessageList => [...prevMessageList, newMessage]);
    };

    useEffect(() => {
        let timerId;
        if(messageList[messageList.length - 1]?.author === 'you') {
            timerId = setTimeout(() => {
                const newMessageList = {
                  text: 'Ваше сообщение могут видеть все участники чата',
                  author: 'bot',
                };
                setMessageList(prevMessageList => [...prevMessageList, newMessageList]);
            }, 2500);
        }
        return () => {
            clearTimeout(timerId);
        }
    }, [messageList]);

    return (
        <div className='messageForm'>
            <FormComponent onAddMessage={handleAddMessage} />
            <ul className='messageList'>
                {messageList.map(({text, author}) => (
                    <li key={Date.now()}>
                        {author}: {text}
                    </li>
                ))}
            </ul>
        </div>
    )
}