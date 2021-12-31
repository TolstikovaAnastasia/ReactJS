import React from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { FormComponent } from '../../components/FormComponent/FormComponent';
import { showUserName, setName } from '../../store/profile/action';
import { selectShowName, selectUserName } from '../../store/profile/selectors';
import { withProfileContext } from '../../utils/ProfileContext';

export const Profile = () => {
    const dispatch = useDispatch();
    const showName = useSelector(selectShowName, shallowEqual);
    const userName = useSelector(selectUserName, shallowEqual)
    
    const handleChange = () => {
        dispatch(showUserName);
    };

    const handleSubmit = (newName) => {
        dispatch(setName(newName));
    };

    return (
        <>
            <h3>Profile</h3>
            <input type='checkbox' checked={showName} onChange={handleChange} />
            {showName && <span>{userName}</span>}
            <FormComponent onSubmit={handleSubmit} />
        </>
    )
};

export default withProfileContext(Profile);