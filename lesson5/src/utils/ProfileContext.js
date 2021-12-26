import React, { useContext } from 'react';

export const ProfileContext = React.createContext({
    content: () => {},
  });

export const withProfileContext =(Component) => (...props) => {
    const {content} = useContext(ProfileContext);

    return <Component {...props} content={content} />
};