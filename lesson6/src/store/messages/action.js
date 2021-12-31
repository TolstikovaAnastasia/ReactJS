export const ADD_MESSAGE = 'MESSAGE::ADD_MESSAGE';
export const DELETE_MESSAGE = 'MESSAGE::DELETE_MESSAGE';

export const addMessage = (newMessage, chatId) => ({
    type: ADD_MESSAGE,
    payload: {
        message: newMessage,
        chatId,
    }
});

export const deleteMessage = (messageId, chatId) => ({
    type: DELETE_MESSAGE,
    payload: {
        messageId,
        chatId,
    }
});