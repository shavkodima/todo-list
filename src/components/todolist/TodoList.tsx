import { FC } from 'react';
import { ITodo } from '../../types/todo.type';
import { List, Button } from 'antd'
import {Link} from 'react-router-dom'
import { RootState } from '../../store/store';
import {useSelector, useDispatch} from 'react-redux'
import { dispatchDeleteTodo } from '../../store/sliceTodos/sliceTodos';

const TodoList: FC = () => {
  const {todos} = useSelector((state:RootState)=> state.todos)
  const dispatch:any = useDispatch()


  const handleDeleteTodo = (id:number) =>{
    dispatch(dispatchDeleteTodo(id, todos))
  }

  return (
    <>
      <List
        itemLayout='horizontal'
        dataSource={todos}
        renderItem={(item:ITodo) => (
          
          <List.Item
              actions={
                  [
                  <Link to={`edit/${item.id}`} key={item.id}>Edit</Link>, 
                    <Button 
                      type='primary' 
                      danger 
                      onClick={()=> handleDeleteTodo(item.id)}>
                      Delete
                    </Button>
                  ]
                }
              >
              <List.Item.Meta title={<p>{item.description}</p>}/>
          </List.Item>
          
        )}
      />
    </>
  );
};

export default TodoList;