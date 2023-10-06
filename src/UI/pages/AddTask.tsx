import {FC, useState} from 'react';
import Forms from '../../components/form/Form';
import { useAppDispatch } from '../../hooks/useSelectorTodos';
import CreateTodoClass from '../../utils/constructorTodo';
import { dispatchAddTodo } from '../../store/sliceTodos/sliceTodos';

const AddTask:FC = () => {
  const [title, setTitle] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const dispatch:any = useAppDispatch()

  const handleFormSubmit = () =>{
    const todo =  new CreateTodoClass(title, description)    
    dispatch(dispatchAddTodo(todo))
  }

  return (
    <div>
      <Forms handler ={handleFormSubmit} setTitle={setTitle} setDescription={setDescription} title={title} description={description}/>
    </div>
  );
};

export default AddTask;