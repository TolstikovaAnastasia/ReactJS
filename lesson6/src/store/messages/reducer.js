import { ADD_CHAT } from "../chats/action";
import { ADD_MESSAGE, DELETE_MESSAGE } from "./action";

const initialState = {};

export const messagesReducer = (state = initialState, action) => {
    switch(action?.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                [action.payload.chatId]: [...state[action.payload.chatId], [action.payload.message]],
            };
        case ADD_CHAT:
            return {
                ...state,
                [action.payload.id]: [],
            };
        case DELETE_MESSAGE:
            return state.messageList.filter((message) => message.id !== action.payload);
        default:
            return state;
    }
};