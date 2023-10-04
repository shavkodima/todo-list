import {FC} from 'react';
import { Routes, Route } from 'react-router-dom';
import LayoutApp from '../UI/layout/Layout';
import Home from '../UI/pages/Home';

const AppController:FC = () => {
  return (
    <Routes>
      <Route path='/' element={<LayoutApp/>}>
        <Route index element={<Home/>}/>
      </Route>
    </Routes>
  );
};

export default AppController;