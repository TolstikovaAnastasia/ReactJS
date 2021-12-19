import React, {useEffect, useRef, useState} from 'react';
import {Button, TextField} from '@mui/material';

export const FormComponent = ({onAddMessage}) => {
    const [value, setValue] = useState('');
    const inputRef = useRef();

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setValue('');
        onAddMessage({text: value, author: 'you', id: Date.now()});
    };

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    return(
        <>
            <form onSubmit={handleSubmit}>
                <TextField ref={inputRef} autoFocus={true} placeholder="Type message to send" size="small" value={value} onChange={handleChange} />
                <Button type='submit' variant="contained" size="large">Send</Button>
            </form>
        </>
    )
}