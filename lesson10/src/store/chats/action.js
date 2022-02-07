import { onValue, set } from 'firebase/database';
import { chatsRef, getChatsRefById, getMsgsRefById } from '../../service/firebase';

export const SET_CHAT = 'CHAT::SET_CHAT';
export const ADD_CHAT = 'CHAT::ADD_CHAT';
export const DELETE_CHAT = 'CHAT::DELETE_CHAT';

export const addChat = (newChat) => ({
    type: ADD_CHAT,
    payload: newChat,
});

export const deleteChat = (chatId) => ({
    type: DELETE_CHAT,
    payload: chatId,
});

const setChat = (chats) => ({
    type: SET_CHAT,
    payload: chats,
});

export const initChatsTracking = () => (dispatch) => {
    onValue(chatsRef, (snapshot) => {
        const newChats = [];
        snapshot?.forEach((chat) => {
            newChats.push(chat.val());
        });
        dispatch(setChat(newChats));
    });
};

export const addChatsWithFb = (newChatName) => () => {
    const newId = `chat${Date.now()}`;
    const newChat = {
        id: newId,
        name: newChatName,
    };
    set(getChatsRefById(newId), newChat);
    set(getMsgsRefById(newId), { empty: true });
};

export const deleteChatWithFb = (id) => () => {
    set(getChatsRefById(id), null);
    set(getMsgsRefById(id), null);
};