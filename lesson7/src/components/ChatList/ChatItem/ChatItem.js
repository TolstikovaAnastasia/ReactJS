import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { ListItem } from '@mui/material';
import { Button } from '@mui/material';
import { deleteChat } from "../../../store/chats/action";

export const ChatItem = ({ chat }) => {
    const dispatch = useDispatch();
    const handleDelete = () => {
        dispatch(deleteChat(chat.id));
    };

    return (
        <ListItem>
            <Link to={`/chats/${chat.id}`} style={{ textDecoration: 'none' }}>{chat.name}</Link>
            <Button type='submit' onClick={handleDelete}>Delete</Button>
        </ListItem>
    );
};