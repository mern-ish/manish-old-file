import { useState } from "react"


const App = () => {
  const [Todos, setTodos] = useState([
    {id:1,title:"kamm karle bhai",isComplete:false},
  ]);

  const [title, settitle] = useState("")
  const [completed, setcompleted] = useState(false)
  const [gender, setgender] = useState("male")
  const [setcity, setsetcity] = useState("patna")

  return (
    <div>

      <h1>2 WAy Binding</h1>
      <form>
        <input 
        onChange={(e)=>{settitle(e.target.value)}}
        value={title}
        type="text"
        placeholder="title"
        />

        <br /><br />

        <input 
        checked={completed}
        onChange={(e)=>{console.log(e.target.checked)}}
        type="checkbox" 
        /> completed

        <br /><br />

        <input
        value={"male"}
        onChange={(e)=>{setgender(e.target.value)}} 
        checked ={gender == "male" && true}
        type="radio" /> Male

        <br /><br />

         <input
        value={"female"}
        onChange={(e)=>{setgender(e.target.value)}} 
        checked = {gender =="female" && true}
        type="radio" /> Female

        <br /><br />
        <select onChange={(e)=>console.log(e.target.value) }>
          <option value="patna">Patna</option>
          <option value="bhojpur">Bhojpur</option>
          <option value="buxar">Buxar</option>
        </select>

        <button>Create Todo</button>
      </form>


    </div>
  )
}

export default App