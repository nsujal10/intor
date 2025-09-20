
import React, { useState } from 'react'
import Create from './components/Create'
import Read from './components/Read'

const App = () => {
  const [todos, settodos] = useState([
    {id:1, title:"Kaam Kar", isCompleted:false},
  ])
  
  return (
    <div className='text-white flex w-screen h-screen bg-gray-700 p-10'>  
        <Create todos={todos} settodos={settodos}/>
        <Read todos={todos} settodos={settodos}/>       
    </div>
  )
}

export default App