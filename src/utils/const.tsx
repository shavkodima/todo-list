import AddTask from "../UI/pages/AddTask";
import Edit from "../UI/pages/Edit";
import Home from "../UI/pages/Home";
import { ILink } from "../types/link.type";

export const NAVLINK:ILink[] = [
  {
  title:'Home',
  url:'/',
  children: <Home/>,
  menu:true
  }, 
  {
  title:'Add task',
  url:'/add',
  children: <AddTask/>,
  menu:true
  }, 
  {
  title:'Edit todo',
  url:'/edit/:id',
  children: <Edit/>,
  menu:false
  }, 
  
]

export const maxLetters = 15