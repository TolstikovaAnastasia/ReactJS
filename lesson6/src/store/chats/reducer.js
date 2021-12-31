import { ADD_CHAT, DELETE_CHAT } from "./action";

const initialState = [];

export const chatsReducer = (state = initialState, action) => {
    switch(action?.type) {
        case ADD_CHAT:
            return [
                ...state,
                action.payload
            ];
        case DELETE_CHAT:
            return state.chatList.filter((chat) => chat.Id !== action.payload);
        default:
            return state;
    }
};