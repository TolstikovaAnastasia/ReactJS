import { apiUrl } from '../../utils/constant';

export const GET_ALBUMS_REQUEST = 'ALBUMS::GET_ALBUMS_REQUEST';
export const GET_ALBUMS_SUCCESS = 'ALBUMS::GET_ALBUMS_SUCCESS';
export const GET_ALBUMS_FAILURE = 'ALBUMS::GET_ALBUMS_FAILURE';

export const getAlbumsRequest = () => ({
    type: GET_ALBUMS_REQUEST,
});

export const getAlbumsSuccess = (data) => ({
    type: GET_ALBUMS_SUCCESS,
    payload: data,
});

export const getAlbumsFailure = (err) => ({
    type: GET_ALBUMS_FAILURE,
    payload: err,
});

export const getAlbums = () => async (dispatch) => {
    dispatch(getAlbumsRequest());

    try {
        const response = await fetch(apiUrl);
        if(!response.ok) {
            throw new Error ("Request error: " + response.status);
        }
        const result = await response.json();
        dispatch(getAlbumsSuccess(result));
    } catch(e) {
        dispatch(getAlbumsFailure(e.message));
    }
};