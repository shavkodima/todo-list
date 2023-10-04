import AddTask from "../UI/pages/AddTask";
import Home from "../UI/pages/Home";
import { ILink } from "../types/link.type";

export const NAVLINK:ILink[] = [
  {
  title:'Home',
  url:'/',
  children: <Home/>
  }, 
  {
  title:'Add task',
  url:'/add',
  children: <AddTask/>
  }, 
]