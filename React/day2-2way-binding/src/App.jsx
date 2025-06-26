import { useState } from "react";

import Read from "./components/Read";
import Create from "./components/create";

const App = () => {
  //js
  //rendering
  const [user, setuser] = useState([
    { name: "manish", age: 15 },
    { name: "sahil", age: 19 },
  ]);
  

  
  

  return (
    <div>
      <Create />
      <Read  user={user} setuser={setuser}/>      

      
    </div>
  );
};

export default App;
