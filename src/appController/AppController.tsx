import {FC, useEffect} from 'react';
import { Routes, Route } from 'react-router-dom';
import LayoutApp from '../UI/layout/Layout';
import Home from '../UI/pages/Home';
import { NAVLINK } from '../utils/const';
import { ILink } from '../types/link.type';
import {useDispatch} from 'react-redux'
import { dispatchAllTodo } from '../store/sliceTodos/sliceTodos';
import { fakeData } from '../db/data';


const AppController:FC = () => {
  const dispatch:any = useDispatch()
  useEffect(()=>{
    dispatch(dispatchAllTodo(fakeData))
  },[])

  return (
    <Routes>
      <Route path={NAVLINK[0].url} element={<LayoutApp/>}>
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