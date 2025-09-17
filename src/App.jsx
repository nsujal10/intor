
import React, { useState } from 'react'

const App = () => {
  const [todos, settodos] = useState([
    {id:1, title:"Kaam Kar", isCompleted:false},
  ])
  
  return (
    <div>  
        <Create todos={todos} settodos={settodos}/>
        <Read todos={todos} settodos={settodos}/>       
    </div>
  )
}

export default App