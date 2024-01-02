import React from 'react';
import { IoMdClose } from "react-icons/io";
import { CiEdit } from "react-icons/ci";
import { useTodoLayerValue } from '../context/TodoContext';
import classNames from 'classnames';

const Todo = ({todo}) => {
  const [{ }, dispatch] = useTodoLayerValue();

  const removeTodo = (todoId) => {
    dispatch({
      type: 'REMOVE_TODO',
      payload: todoId
    });
  };

  const completeTodo = (todoId) => {
    dispatch({
      type: 'COMPLETE_TODO',
      payload: todoId
    });
  };

  return (
    <li className={
        classNames({
          "p-3 mb-2 transition flex": true,
          "bg-red-200": todo.isCompleted === false,
          "bg-red-300 line-through": todo.isCompleted === true
        })
    }>
      <div onClick={() => completeTodo(todo.id)} className='text-[#404040] flex-1 text-left cursor-pointer'>
        <h3>{todo.content}</h3>
      </div>
      <div className='flex-none text-right'>
        <button type='button'  className='mr-1 hover:text-red-600'><CiEdit /></button>
        <button type='button' onClick={() => removeTodo(todo.id)} className='hover:text-red-600'><IoMdClose /></button>
      </div>
    </li>
  )
}

export default Todo;
