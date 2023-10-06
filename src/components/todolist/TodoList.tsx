import { FC } from 'react';
import { ITodo } from '../../types/todo.type';
import { List, Button, Skeleton } from 'antd'
import { Link } from 'react-router-dom'
import { RootState } from '../../store/store';
import { useSelector, useDispatch } from 'react-redux'
import { dispatchDeleteTodo } from '../../store/sliceTodos/sliceTodos';
import { maxLetters } from '../../utils/const';
import classes from './todo.module.css'

const TodoList: FC = () => {
  const { todos, loading } = useSelector((state: RootState) => state.todos)
  const dispatch: any = useDispatch()
   
  const handleDeleteTodo = (id: number) => {
    dispatch(dispatchDeleteTodo(id, todos))
  }

  if (loading) {
    return (
      <Skeleton paragraph={{ rows: 3 }} />
    )
  }

 

  return (
    <>

      <List
        itemLayout='vertical'
        dataSource={todos}
        pagination={{
          defaultPageSize: 3,
          align: 'start',
          hideOnSinglePage:true
        }}
        locale={{  emptyText: !todos.length ? 'Пусто' : '' }}
        renderItem={(item: ITodo) => (
          <List.Item
            className={classes.item}
            actions={
              [
                <Link to={`edit/${item.id}`} key={item.id}>Edit</Link>,
                <Button
                  type='primary'
                  danger
                  onClick={() => handleDeleteTodo(item.id)}>
                  Delete
                </Button>
              ]
            }
          >
            <List.Item.Meta title={<p>{item.title}</p>} />
            <List.Item.Meta description={
              <p>{item.description.length > maxLetters
                ? item.description.split('').splice(0, maxLetters).join('') + '...' :
                item.description}</p>} />
            <List.Item.Meta description={
              <p>{item.date}</p>} />
          </List.Item>
        )}

      />
    </>
  );
};

export default TodoList;