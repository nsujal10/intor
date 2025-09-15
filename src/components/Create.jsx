import { useState } from "react";

const Create = (props) => {

console.log(props);

const [fullname, setfullname] = useState("")
const [age, setage] = useState(5)

const submithandler = (e) => {
  e.preventDefault();
  const newuser={fullname, age}
  console.log(newuser);
}



  return (
    <div>
    <h1>Register user</h1>
      <form onSubmit={submithandler}>
        <input 
        onChange={(e) => setfullname(e.target.value)}
        value={fullname}
        type="text" 
        placeholder="Name" />


        <input 
        onChange={(e) => setage(e.target.value)}
        value={age}
        type="number" 
        placeholder="Age" />
        <button>Submit</button>
      </form></div>
  )
}

export default Create