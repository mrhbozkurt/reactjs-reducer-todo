import './App.css';
import React, {useState, useEffect, useRef} from 'react';
import { useTodoLayerValue } from './context/TodoContext';
import TodoList from './components/TodoList';


function App() {

  const [{todos}, dispatch] = useTodoLayerValue ();
  const [content, setContent] = useState('');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);


  const handleSubmit = (e) => {
    e.preventDefault();

    if(!content && content.length < 1) return;
    
    const newTodo = {
      id: Math.floor(Math.random() * 1234567890),
      content,
      isCompleted: false
    };

    dispatch({
      type: 'ADD_TODO',
      payload: newTodo
    });

    setContent('');

  }

  return (
    <div className="App">

        <main className='w-screen h-screen p-4 bg-red-100'>

          <div className='container-lg mx-auto p-4 mt-20'>
              <form onSubmit={handleSubmit}>
                <input type='text' ref={inputRef} onChange={(e) => (setContent(e.target.value))} value={content} className='w-1/3 p-3 bg-red-300 placeholder-white text-black border focus:border-red-500 focus:outline-none focus:ring focus:ring-red-200' placeholder='What is the task?' />
                <button type='submit' disabled={!content} className='bg-red-400 disabled:bg-red-300 disabled:text-white hover:bg-red-300 px-5 py-3 text-white hover:text-black'>Add</button>
              </form>
          </div>

          <TodoList todos={todos} />

        </main>

    </div>
  );
}

export default App;
