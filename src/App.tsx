import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import './App.css';
import LayoutApp from './UI/layout/Layout';
import AppController from './appController/AppController';

function App() {
  return (
    <BrowserRouter>
      <AppController/>
    </BrowserRouter>
  );
}

export default App;
