import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Link from '@mui/material/Link';
import { makeStyles } from '@mui/styles';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    toolbarSecondary: {
      justifyContent: 'center',
      overflowX: 'auto',
      backgroundColor: 'rgb(255, 252, 210)',
      borderStyle: 'solid',
      borderColor: 'rgb(255, 252, 210)',
      borderWidth: '0px 0px thin'
    },
    toolbarLink: {
      padding: '16px',
      flexShrink: 0,
      color: 'wheat',
      cursor: 'pointer',
      textDecoration: 'none'
    },
}));

export const Header = () => {
    const classes = useStyles();
  
    return (
        <>
            <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
                <Link
                component={RouterLink}
                underline="none"
                color="inherit"
                noWrap
                key=""
                variant="body2"
                to="/"
                className={classes.toolbarLink}
                >
                    Home
                </Link>
                <Link
                component={RouterLink}
                underline="none"
                color="inherit"
                noWrap
                key=""
                variant="body2"
                to="/profile"
                className={classes.toolbarLink}
                >
                    Profile
                </Link>
                <Link
                component={RouterLink}
                underline="none"
                color="inherit"
                noWrap
                key=""
                variant="body2"
                to="/chats"
                className={classes.toolbarLink}
                >
                    Chats
                </Link>
            </Toolbar>
        </>
    );
};