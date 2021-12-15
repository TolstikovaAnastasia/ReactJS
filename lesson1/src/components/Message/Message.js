import React from 'react';
import './Message.css';

export const Message = (props) => {
    return <div className='Message'>{props.text}</div>
};