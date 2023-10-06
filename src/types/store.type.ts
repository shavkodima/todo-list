import { ITodo } from "./todo.type";

export interface IStoreTodos {
  todos:ITodo[]
  loading:boolean
  error:string
}