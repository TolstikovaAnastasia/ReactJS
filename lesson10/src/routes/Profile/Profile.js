import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { FormComponent } from '../../components/FormComponent/FormComponent';
import { logOut } from '../../service/firebase';
import { initUserData, setNameInDb, setShowNameInDb } from '../../store/profile/action';
import { Button } from '@mui/material';

export const Profile = ({ showName, userName, changeName, toggleShowName, connectToDb }) => {

    useEffect(() => {
        connectToDb();
    }, []);

    const handleChange = (e) => {
        toggleShowName(e.target.checked);
    };

    const handleSubmit = (newName) => {
        changeName(newName);
    };
  
    return (
        <>
            <h3>Profile</h3>
            <Button onClick={logOut} style={{width: '100px'}}>Sign Out</Button>
            <input type="checkbox" checked={showName} onChange={handleChange} style={{marginBottom: '10px'}} />
            {showName && <span>{userName}</span>}
            <FormComponent onSubmit={handleSubmit} />
        </>
    );
};

const mapStateToProps = (state) => ({
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

export default ConnectedProfile;