
const Car = (props) => {
    const getCar =()=>{
        alert("hello , u won suv");
    }
  return (
    <div>
        <h1>i have this car {props.brand.name} and color is {props.brand.color} and model is {props.brand.model}</h1>
    </div>
  )
}

export default Car