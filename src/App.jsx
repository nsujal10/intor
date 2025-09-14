import React, { useState } from 'react'

const App = () => {

  const [username, setUsername] = useState("Sujal")

  const change = () => {
    setUsername("Sujal dnn")
    console.log(username);
    
  }
  return (
    <div>
      <h1>Usename</h1>
      <h2>{username}</h2>
      <button onClick={change}>Change name</button>
    </div>
  )
}

export default App