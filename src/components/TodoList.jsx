import React from 'react';
import Todo from './Todo';

const TodoList = ({todos}) => {
  
  return (

    <div className='container-lg mx-auto p-4 flex justify-center'>

      <ul className='w-[39%]'>
        {
          todos.length === 0 ? (
            <p className='text-gray-600'>
              <b>Warning:</b> Task list is empty!
            </p>
          ) : (
            todos.map(todo => (
              <Todo key={todo.id} todo={todo} />
            ))
          )
        }
      </ul>

    </div>

  )
}

export default TodoList;
