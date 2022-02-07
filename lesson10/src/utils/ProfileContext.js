import React, { useContext } from 'react';

export const ProfileContext = React.createContext({
  name: 'Name',
  setName: () => {},
});

export const withProfileContext = (Component) => (props) => {
  const { name, setName } = useContext(ProfileContext);

  return <Component {...props} name={name} setName={setName} />;
};