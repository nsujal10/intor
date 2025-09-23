import { createContext, useState } from "react"


export const todoscontext = createContext()

const Wrapper = (props) => {
    const [todos, settodos] = useState([
    {id:1, title:"Kaam Kar", isCompleted:false},
  ])

  return (
    <todoscontext.Provider value={[todos, settodos]}>
        {props.children} 
    </todoscontext.Provider>
  )
}

export default Wrapper