import React, {useState} from 'react';
import { IoMdClose } from "react-icons/io";
import { CiEdit } from "react-icons/ci";
import { IoCheckmarkOutline } from "react-icons/io5";
import { useTodoLayerValue } from '../context/TodoContext';
import classNames from 'classnames';

const Todo = ({todo}) => {
  const [{ }, dispatch] = useTodoLayerValue();
  const [editable, setEditable] = useState(false);
  const [content, setContent] = useState(todo.content);

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

  const updateTodo = ({todoId, newValue}) => {
    dispatch({
      type: 'UPDATE_TODO',
      payload: {
        todoId,
        newValue
      }
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
      <div onClick={() => (editable ? '' : completeTodo(todo.id))} className='text-[#404040] flex-1 text-left cursor-pointer pr-4'>
        
        {
          editable ? 
          <input type='text' value={content} onChange={e => setContent(e.target.value)} className='w-full p-3 bg-red-300 border-0 placeholder-white text-black focus:border-red-500 focus:outline-none focus:ring focus:ring-red-200' />
          : 
          <h3>{todo.content}</h3>
        }

      </div>
      <div className='flex items-center flex-none text-right'>
        {
          editable ?
          <button type='button' onClick={() => {
            updateTodo({
              todoId: todo.id,
              newValue: content
            })

            setContent('');
            setEditable(false);

          }} className='mr-1 text-lg text-green-600 hover:text-green-900'><IoCheckmarkOutline  /></button>
          :
          <button type='button' onClick={() => setEditable(true)} className='mr-1 hover:text-red-600 '><CiEdit /></button>

        }
        
        <button type='button' onClick={() => removeTodo(todo.id)} className='hover:text-red-600'><IoMdClose /></button>
      </div>
    </li>
  )
}

export default Todo;
