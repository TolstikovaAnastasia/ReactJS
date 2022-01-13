import { REQUEST_STATUS } from '../../utils/constant';
import { GET_ALBUMS_FAILURE, GET_ALBUMS_REQUEST, GET_ALBUMS_SUCCESS } from './action';

const initialState = {
    data: [],
    request: {
        error: '',
        status: REQUEST_STATUS.IDLE,
    },
};

export const albumsReducer = (state = initialState, action) => {
    switch(action?.type) {
        case GET_ALBUMS_REQUEST:
            return {
                ...state,
                request: {
                    error: '',
                    status: REQUEST_STATUS.PENDING,
                },
            };
        case GET_ALBUMS_FAILURE:
            return {
                ...state,
                request: {
                    error: action.payload,
                    status: REQUEST_STATUS.FAILURE,
                },
            };
        case GET_ALBUMS_SUCCESS: {
            return {
                data: action.payload,
                request: {
                    error: '',
                    status: REQUEST_STATUS.SUCCESS,
                },
            };
        }
        default:
            return state;
    }
};