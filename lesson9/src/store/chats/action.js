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