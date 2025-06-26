import Car from "./Car"
const Garbage = () => {
    let carInfo ={name:"Ford",color:"red",model:2038}
  return (
    <div>
        
        <h1>This is Garbage components</h1>
        <Car brand={carInfo} />
    </div>
  )
}

export default Garbage