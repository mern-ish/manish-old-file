import { useState } from "react"
import Create from "./components/Create"
import Read from "./components/Read"

const App = () => {

  const[todos,settodos] = useState(([
  {id:1,title:"kaam kar",isComplete:false}
  ]));


  
 
  return (
    <div className="w-screen h-screen bg-gray-800 flex p-10">
      <Create todos = {todos} settodos= {settodos}/>
      <hr />
      <Read todos = {todos} settodos = {settodos}/>
    </div>
  )
}

export default App