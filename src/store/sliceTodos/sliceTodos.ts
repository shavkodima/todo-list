import { Dispatch, PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IStoreTodos } from "../../types/store.type";
import { ITodo } from "../../types/todo.type";


const defaultTodos:IStoreTodos = {
  todos:[],
  loading:false,
  error:''
}

export const sliceTodos = createSlice({
  name:'sliceTodos',
  initialState:defaultTodos,
  reducers:{
    allTodos:(state, action:PayloadAction<ITodo[]>)=>{
      state.todos = action.payload
    },
    addTodo:(state, action:PayloadAction<ITodo>)=>{      
      state.todos = [...state.todos, action.payload]
    },
    editTodo:()=>{

    },
    removeTodo:(state, action:PayloadAction<ITodo[]>)=>{
      state.todos = action.payload
    },
    setLoading:(state, action:PayloadAction<boolean>)=>{
        state.loading = action.payload
    },
    setError:(state, action:PayloadAction<string>)=>{
      state.error = action.payload
  }
  },
})

export const {addTodo, removeTodo, setLoading, setError, allTodos} = sliceTodos.actions

export const dispatchAllTodo = (todos:ITodo[]) => async(dispatch:Dispatch) =>{
  try {    
    dispatch(setLoading(true))
    setTimeout(()=>{
      dispatch(allTodos(todos))
      dispatch(setLoading(false))
      
    },3000)

  } catch (error:any) {
    dispatch(setError(error.message))
    dispatch(setLoading(false))
  }
}

export const dispatchDeleteTodo = (id:number, todos:ITodo[]) => async(dispatch:Dispatch) =>{
    try {
      dispatch(setLoading(true))
      const newTodos:ITodo[] = todos.filter(todo=> todo.id != id)  
        dispatch(removeTodo(newTodos))
        dispatch(setLoading(false))
    } catch (error:any) {
      dispatch(setError(error.message))
      dispatch(setLoading(false))
    }
}


export const dispatchAddTodo = (todo:ITodo) => async(dispatch:Dispatch) =>{
  try {      
    dispatch(addTodo({...todo}))
  } catch (error:any) {
    setError(error.message)
  }
}


export default sliceTodos.reducer