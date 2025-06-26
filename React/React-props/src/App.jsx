// import Car from "./components/Car"
import Garbage from "./components/Garbage"
import List from "./components/List"

const App = () => {
  //list
  const items = ["apple","banana","orange","pomogranade"]
  //js
 

  return (
    <div>
      <h1> React Props</h1>

      <Garbage />

      <List fruit = {items}/>

    </div>
  )
}

export default App