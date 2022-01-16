import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { Router } from './routes/Router';
import { ProfileContext } from './utils/ProfileContext';
import { store } from "./store";
import './App.css';

function App() {

  const [name, setName] = useState('your name:');
  
  return (
    <div className='App'>
      <Provider store={store}>
        <ProfileContext.Provider value={{ name, setName }}>
          <Router />
        </ProfileContext.Provider>
      </Provider>
    </div>
  );
};

export default App;
