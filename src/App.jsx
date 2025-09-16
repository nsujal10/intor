import React, { useState } from 'react'

const App = () => {
  const [todos, settodos] = useState([
    {id:1, title:"Kaam Kar", isCompleted:true},
  ])
  const [title, settitle] = useState("")
  const [Completed, setCompleted] = useState(false)
  const [gender, setgender] = useState("male")
  const [city, setcity] = useState("delhi")

  return (
    <div>
      <h1>Create Tasks</h1>
        <form>
          <input 
          onChange={(e) => settitle(e.target.value)}
          value={title}
          type="text" 
          placeholder='Task Title' 
          />

          <br />  <br /> 
          <input 
          onChange={(e) => setCompleted(e.target.checked)}
          type="checkbox"
          /> 
          Completed
          <br /> <br />

          <input 
          value="male"
          onChange={(e) => setgender(e.target.checked)}
          checked={gender=="male" && true}
          type="radio"
          /> 
          Male

          <br /> <br />

          <input 
          value="female"
          onChange={(e) => setgender(e.target.checked)}
          checked={gender=="female" && true}
          type="radio"
          /> 
          Female

          <br /> <br />

        <select 
        value={city}
        onChange={(e) => setcity(e.target.value)}>
          <option value="delhi">Delhi</option>
          <option value="mumbai">Mumbai</option>
          <option value="kolkata">Kolkata</option>
        </select>

        <br /> <br />
          <button>Create Tool</button>
        </form>
    </div>
  )
}

export default App