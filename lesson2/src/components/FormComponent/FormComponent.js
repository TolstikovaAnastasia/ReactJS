import React, {useState} from 'react';
import './FormComponent.css';

export const FormComponent = ({onAddMessage}) => {
    const [value, setValue] = useState('');

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setValue('');
        onAddMessage({text: value, author: 'you'});
    };

    return(
        <>
            <form onSubmit={handleSubmit}>
                <input type='text' className='sendInput' placeholder='Type message to send' value={value} onChange={handleChange} />
                <button type='submit' className='sendBtn'>
                    Send
                </button>
            </form>
        </>
    )
}