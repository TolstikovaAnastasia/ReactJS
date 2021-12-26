import { PROFILE_CONTENT } from "./action";

const initialState = {
    content: false,
};

export const profileReducer = (state = initialState, action) => {
    switch (action?.type) {
        case PROFILE_CONTENT:
            return {
                ...state,
                content: !state.content,
            };
        default:
            return state;
    }
};