import React from 'react'

const App = () => {
  const handleclick = () => {
    alert("Clicked")
  }

  const handleparamclick = (msg) => {
    alert(msg)
  }

  // const wrapper = () => handleparamclick("Hello")

  return (
    <>
    <h1>{2+3}</h1>
      <div>App</div>
      <button onClick={handleclick}>Click</button>
      <button onClick={ () => handleparamclick("Hello")}>Click</button>
    </>
  )
}

export default App