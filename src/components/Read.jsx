import { Fragment } from "react";
import "./Read.css"

const Read = (props) => {


const todos=props.todos;
const settodos=props.settodos;

const DeleteHandler = (id) => {
   const filtertodo = todos.filter((todo) => todo.id !== id)
    settodos(filtertodo);
}

const renderedtodos = todos.map(todo => {
    return (
      <li 
        key={todo.id} 
        className="mb-4 flex justify-between items-center p-4 bg-gray-900 rounded">
        <span className="text-xl font-thin">{todo.title}</span>
        <button 
          className="font-thin text-red-400 border px-4 py-2 rounded hover:text-white"
          onClick={()=>DeleteHandler(todo.id)}>Delete</button 
          >
      </li>
    )
  })

  return (
    <div className="w-[40%] p-10">
        <h1 className="mb-10 text-5xl font-thin"> <span className="text-pink-500">Pending</span>  Todos</h1>
        <ol>{renderedtodos}</ol>
    </div>
  )
}

export default Read
