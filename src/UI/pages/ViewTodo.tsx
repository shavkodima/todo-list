import {FC, useState, useEffect} from 'react';
import SkeletonComponent from '../../components/skeleton/Skeleton';
import {List, Button} from 'antd'
import { useParams, Link } from 'react-router-dom'
import {  useAppSelector } from '../../hooks/useSelectorTodos';
import { RootState } from '../../store/store';
import { ITodo } from '../../types/todo.type';
import classes from './view.module.css';

const ViewTodo:FC = () => {
  const {id} = useParams()
  const {todos, loading} = useAppSelector((state:RootState) => state.todos)
  const [todo, setTodo] = useState<ITodo[]>()

  useEffect(()=>{
    const todo = todos.filter((todo) => todo.id === Number(id))

    setTimeout(()=>{
      setTodo(todo)
    }, 2000)

  },[todos])
  
  if(loading || !todo){
    return (
      <SkeletonComponent row={10} />
    )
  }

  return (
    <List
    dataSource={todo}
    className={classes.item}
    itemLayout='vertical'
    renderItem={(item) => (
      <List.Item
        key={item.title}
        actions={[
          <Link to={`/edit/${item.id}`}><Button type='primary'>Edit</Button></Link>,
          
        ]}
      >
        <List.Item.Meta
        className={classes.title}
          title={item.title}
        />
        <div className={classes.content}>{item.description}</div>
        <div className={classes.date}>Created {item.date} </div>
      </List.Item>
    )}
    />
     
    
  );
};

export default ViewTodo;