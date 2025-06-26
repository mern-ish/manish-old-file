import { useState } from "react";

const create = (props) => {
    console.log(props);

    const [fullname, setfullname] = useState("");
  const [age,setage] = useState(18);

  const submitHandler = (e)=>{
    e.preventDefault();
    const newUser ={fullname,age}
     console.log(newUser);
    console.log("form submit");
  }
  return (
    <div>
        <h1>Two way binding</h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="enter name"
          onChange={(e) => setfullname(e.target.value)}
          value={fullname}
        />
        <br /><br />
        <input 
        type="number" 
        placeholder="enter number"
        onChange ={(e)=>setage(e.target.value)}
        value={age} 
        />
        <br /><br />
        <button type="submit" >Submit</button>
      </form>
    </div>
  )
}

export default create