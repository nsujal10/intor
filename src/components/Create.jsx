import { nanoid } from "nanoid";
import { useState } from "react";

const Create = (props) => {

const todos=props.todos;
const settodos=props.settodos;

const [title, settitle] = useState("")  

const submithandler = (e) => {
  e.preventDefault();
  const newtotdo = {
    id: nanoid(), 
    title,
    isCompleted:false
  }

  const copytodos= [...todos]
  copytodos.push(newtotdo)
  settodos(copytodos)

  settitle("")
  
  }

  return (
    <div>
    <h1>Create Tasks</h1>
        <form onSubmit={submithandler}>
          <input 
          onChange={(e) => settitle(e.target.value)}
          value={title}
          type="text" 
          placeholder='Task Title' 
          />

        <br /> <br />
          <button>Create Tool</button>
        </form>
      </div>
  )
}

export default Create

