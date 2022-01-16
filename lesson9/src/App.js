import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { Router } from './routes/Router';
import { ProfileContext } from './utils/ProfileContext';
import { persistor, store } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import './App.css';

function App() {

  const [name, setName] = useState('Name');
  
  return (
    <div className='App'>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <ProfileContext.Provider value={{ name, setName }}>
            <Router />
          </ProfileContext.Provider>
        </PersistGate>
      </Provider>
    </div>
  );
};

export default App;
