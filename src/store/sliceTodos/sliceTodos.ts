import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IStoreTodos } from "../../types/store.type";
import { ITodo } from "../../types/todo.type";
import { fakeData } from "../../db/data";


const defaultTodos:IStoreTodos = {
  todos:fakeData
}

export const sliceTodos = createSlice({
  name:'sliceTodos',
  initialState:defaultTodos,
  reducers:{
    addTodo:(state, action:PayloadAction<ITodo[]>)=>{
      state.todos = action.payload
    },
    editTodo:()=>{

    },
    removeTodo:()=>{

    }
    
  },
})

export const {addTodo} = sliceTodos.actions

export const dispatchDeleteTodo = (id:number, todos:ITodo[]) => async(dispatch:any) =>{
  const newTodos:ITodo[] = todos.filter(todo=> todo.id != id)  
   dispatch(addTodo(newTodos))
}


export default sliceTodos.reducer