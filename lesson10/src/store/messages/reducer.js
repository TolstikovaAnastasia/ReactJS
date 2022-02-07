import { ADD_CHAT, DELETE_CHAT } from "../chats/action";
import { ADD_MESSAGE, SET_MESSAGE } from "./action";

const initialState = {};

export const messagesReducer = (state = initialState, action) => {
    switch(action?.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                [action.payload.chatId]: [
                    ...state[action.payload.chatId],
                    action.payload.message,
                ],
            };
        case ADD_CHAT:
            return {
                ...state,
                [action.payload.id]: [],
            };
        case DELETE_CHAT: {
            const newMessages = { ...state };
            delete newMessages[action.payload];
            return newMessages;
        }
        case SET_MESSAGE: {
            return action.payload;
        }
        default:
            return state;
    }
};