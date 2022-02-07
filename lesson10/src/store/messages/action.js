import { USERS } from '../../utils/constant';
import { onValue, push } from 'firebase/database';
import { getMsgsListRefById, msgsRef } from '../../service/firebase';

export const SET_MESSAGE = 'MESSAGE::SET_MESSAGE';
export const ADD_MESSAGE = 'MESSAGE::ADD_MESSAGE';
export const DELETE_MESSAGE = 'MESSAGE::DELETE_MESSAGE';

export const addMessage = (newMessage, chatId) => ({
    type: ADD_MESSAGE,
    payload: {
        message: newMessage,
        chatId,
    },
});

export const deleteMessage = (messageId, chatId) => ({
    type: DELETE_MESSAGE,
    payload: {
        messageId,
        chatId,
    },
});

export const setMsgs = (msgs) => ({
    type: SET_MESSAGE,
    payload: msgs,
});

let timerId;

export const addMessageWithReply = (newMessage, chatId) => (dispatch) => {
    dispatch(addMessage(newMessage, chatId));

    clearTimeout(timerId);
    if(newMessage.author === USERS.YOU) {
        timerId = setTimeout(() => {
            dispatch(addMessage(
                {
                    text: 'Ваше сообщение могут видеть все участники чата',
                    author: USERS.BOT,
                    id: `msg-${Date.now()}`,
                },
                chatId)
            );
        }, 2500);
    }
};

export const initMsgsTracking = () => (dispatch) => {
    onValue(msgsRef, (snapshot) => {
        const newMsgs = {};
        snapshot?.forEach((chatsMsgsSnap) => {
            newMsgs[chatsMsgsSnap.key] = Object.values(
                chatsMsgsSnap.val().messageList || {}
            );
        });
        dispatch(setMsgs(newMsgs));
    });
};

export const addMsgWithFb = (newMsg, chatId) => () => {
    push(getMsgsListRefById(chatId), newMsg);
};