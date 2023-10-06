import { ITodo } from "../types/todo.type";
import { parseDate } from "../utils/parseDate";

export const fakeData: ITodo[] = [
  {
    id: 1,
    title:'title 2',
    description: 'lorem 1',
    date: parseDate(),
    isActiv: true
  },
  
]