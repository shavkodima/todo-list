import {FC} from 'react';
import { Routes, Route } from 'react-router-dom';
import LayoutApp from '../UI/layout/Layout';
import Home from '../UI/pages/Home';
import { NAVLINK } from '../utils/const';
import { ILink } from '../types/link.type';

const AppController:FC = () => {
  return (
    <Routes>
      <Route path='/' element={<LayoutApp/>}>
        <Route index element={<Home/>}/>
        {
          NAVLINK.map((nav:ILink)=>(
            <Route key={nav.url} path={nav.url} element={nav.children}/>
          ))
        }
      </Route>
    </Routes>
  );
};

export default AppController;