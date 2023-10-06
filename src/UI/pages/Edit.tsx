import {FC, useState, useEffect, useMemo} from 'react';
import {useParams} from 'react-router-dom'
import Forms from '../../components/form/Form';
import { useAppDispatch, useAppSelector } from '../../hooks/useSelectorTodos';
import CreateTodoClass from '../../utils/constructorTodo';
import { dispatchAddTodo, dispatchUpdateTodo } from '../../store/sliceTodos/sliceTodos';
import { RootState } from '../../store/store';
import { ITodo } from '../../types/todo.type';



const Edit:FC = () => {
  const params= useParams()
  const {todos, loading} = useAppSelector((state:RootState) => state.todos)
  const [todo, setTodo] = useState<ITodo>()
  const [title, setTitle] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const dispatch:any = useAppDispatch()

  useEffect(()=>{
    const todo  = todos.find(todo=> todo.id === Number(params.id))
    setTodo(todo)
    if(todo){
      setTitle(todo.title)
      setDescription(todo.description)
    }
  },[loading ,])
  
  
  const handleFormSave = () =>{
      console.log(title, description, params.id);
      
        
    dispatch(dispatchUpdateTodo(Number(params.id),todos, title, description))
  }

  return (
    <div>
      {todo ? <Forms 
        flagEdit={true} 
        handler ={handleFormSave} 
        setTitle={setTitle} 
        setDescription={setDescription} 
        title={title} 
        description={description}/> 
        : ''
      }
    </div>
  );
};

export default Edit;