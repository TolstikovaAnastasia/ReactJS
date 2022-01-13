import { USERS } from '../../utils/constant';

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