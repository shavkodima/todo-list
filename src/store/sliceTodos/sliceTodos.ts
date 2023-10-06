import { Dispatch, PayloadAction, createSlice } from "@reduxjs/toolkit";
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
    addTodo:(state, action:PayloadAction<ITodo>)=>{      
      state.todos = [...state.todos, action.payload]
    },
    editTodo:()=>{

    },
    removeTodo:(state, action:PayloadAction<ITodo[]>)=>{
      state.todos = action.payload
    }
    
  },
})

export const {addTodo, removeTodo} = sliceTodos.actions

export const dispatchDeleteTodo = (id:number, todos:ITodo[]) => async(dispatch:Dispatch) =>{
  const newTodos:ITodo[] = todos.filter(todo=> todo.id != id)  
   dispatch(removeTodo(newTodos))
}


export const dispatchAddTodo = (todo:ITodo) => async(dispatch:Dispatch) =>{
  try {      
    dispatch(addTodo({...todo}))
  } catch (error) {
    
  }
}


export default sliceTodos.reducer