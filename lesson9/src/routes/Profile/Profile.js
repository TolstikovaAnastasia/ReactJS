import React, { useState, useEffect } from 'react';
//import { connect } from 'react-redux';
import { FormComponent } from '../../components/FormComponent/FormComponent';
import { logOut, userNameRef, userShowNameRef } from '../../service/firebase';
//import { initUserData, setNameInDb, setShowNameInDb } from '../../store/profile/action';
import { Button } from '@mui/material';
import { onValue, set } from 'firebase/database';
//import { useSelector, shallowEqual } from 'react-redux';
//import { selectConnectToDb, selectShowName, selectUserName } from '../../store/profile/selectors';
import { withProfileContext } from '../../utils/ProfileContext';

export const Profile = ({ showName, userName, changeName, toggleShowName, connectToDb }) => {
    /*const showName = useSelector(selectShowName, shallowEqual);
    const userName = useSelector(selectUserName, shallowEqual);*/

    const [fbData, setFbData] = useState({ name: '', showName: false });

    /*useEffect(() => {
        connectToDb();
    }, []);*/

    useEffect(() => {
        const unsubscribeName = onValue (userNameRef, (snapshot) => {
            const userName = snapshot?.val();
            setFbData((prevData) => ({ ...prevData, name: userName }));
        });
        const unsubscribeShowName = onValue (userShowNameRef, (snapshot) => {
            const userShowName = snapshot?.val();
            setFbData((prevData) => ({ ...prevData, showName: userShowName }));
        });

        return () => {
            unsubscribeName();
            unsubscribeShowName();
        };
    }, []);

    const handleChange = (e) => {
        set(userShowNameRef, e.target.checked);
        //toggleShowName(e.target.checked);
    };

    const handleSubmit = (newName) => {
        set(userNameRef, newName);
        //changeName(newName);
    };
  
    return (
        <>
            <h3>Profile</h3>
            <Button onClick={logOut} style={{width: '100px'}}>Sign Out</Button>
            <input type="checkbox" checked={fbData.showName} onChange={handleChange} style={{marginBottom: '10px'}} />
            {fbData.showName && <span>{fbData.name}</span>}
            <FormComponent onSubmit={handleSubmit} />
        </>
    );
};

export default withProfileContext(Profile);

/*const mapStateToProps = (state) => ({
    showName: state.profile.showName,
    userName: state.profile.name,
});
  
const mapDispatchToProps = {
    changeName: setNameInDb,
    toggleShowName: setShowNameInDb,
    connectToDb: initUserData,
};
  
const ConnectedProfile = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Profile);

export default ConnectedProfile;*/