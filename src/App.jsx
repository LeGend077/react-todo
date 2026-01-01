import { useState, useEffect } from 'react';
import './App.css'
import Todo from './Todo';

function App() { 
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

    useEffect(() => {
	if (localStorage.getItem("todos")) {
	    setTodos(JSON.parse(localStorage.getItem("todos")))
	} else {
	    localStorage.setItem("todos", JSON.stringify(todos))
	}
    }, [])

  return (
    <div className="p-4">
      <div className="text-center text-2xl">TO-DO LIST</div>
      <div className="flex items-center w-full justify-center">
	<input type="text" name="todo" value={todo ?? ''} onChange={(e) => setTodo(e.target.value)} className="border-1 p-2 rounded-lg border-solid" placeholder="Complete homework..." maxLength="36" />	
      <button className="p-2 border-2 border-solid bg-gray-900 text-white rounded-lg hover:bg-gray-800 active:bg-gray-700" onClick={() => {
	if (todo) {setTodos([...todos, todo]); localStorage.setItem('todos', JSON.stringify([...todos, todo])); setTodo("")} else { return }      }}>Add Todo</button>
      </div> <br/>
      <div className="flex flex-col items-center m-auto w-[80vw] sm:w-120 justify-center">
	{
	    todos.map((todo, index) => {
		return (<Todo key={index} content={todo} index={index} todos={todos} setTodos={setTodos} />)
	    })
	}
      </div>
    </div>
  )
}

export default App
