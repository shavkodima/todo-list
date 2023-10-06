import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import './App.css';
import AppController from './appController/AppController';
import { Provider } from 'react-redux';
import { store } from './store/store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppController />
      </BrowserRouter>
    </Provider>

  );
}

export default App;
