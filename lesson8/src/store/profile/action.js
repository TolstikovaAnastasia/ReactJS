export const SHOW_NAME = 'PROFILE::SHOW_NAME';
export const SET_NAME = 'PROFILE::SET_NAME';

export const showUserName = {
    type: SHOW_NAME,
};

export const setName = (newName) => ({
    type: SET_NAME,
    payload: newName,
});