import { Fragment } from "react";

const Read = (props) => {


const todos=props.todos;
const settodos=props.settodos;

const renderedtodos = todos.map(todo => {
    return <li key={todo.id}>{todo.title}</li>
  })

  return (
    <Fragment>
        <h1>Pending Todos</h1>
        <ol>{renderedtodos}</ol>
    </Fragment>
  )
}

export default Read
