import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { PROFILE_CONTENT } from '../../store/profile/action';
import { withProfileContext } from '../../utils/ProfileContext';

export const Profile = ({content}) => {
    const dispatch = useDispatch();
    const storeData = useSelector((state) => state.content);
    
    const handleChange = () => {
        dispatch({type: PROFILE_CONTENT});
    };

    return (
        <>
            <h3>Profile</h3>
            <input type='checkbox' value={content} onChange={handleChange} />
            {PROFILE_CONTENT && <span>{content}</span>}
        </>
    )
};

export default withProfileContext(Profile);