import AddTask from "../UI/pages/AddTask";
import Edit from "../UI/pages/Edit";
import Home from "../UI/pages/Home";
import ViewTodo from "../UI/pages/ViewTodo";
import { ILink } from "../types/link.type";

export const NAVLINK: ILink[] = [
  {
    title: 'Home',
    url: '/',
    children: <Home />,
    menu: true
  },
  {
    title: 'Add task',
    url: '/add',
    children: <AddTask />,
    menu: true
  },
  {
    title: 'Edit todo',
    url: '/edit/:id',
    children: <Edit />,
    menu: false
  },
  {
    title: 'View todo',
    url: '/view/:id',
    children: <ViewTodo />,
    menu: false
  },

]

export const maxLetters = 15