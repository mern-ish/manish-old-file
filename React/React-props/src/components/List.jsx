
const List = (props) => {
    
  return (
    <div>
    <h1>List</h1>
    <ul>
      {props.fruit.map((item,index)=>{
        return <li key = {index}>{item}</li>
      })}
    </ul>

    </div>
  )
}

export default List