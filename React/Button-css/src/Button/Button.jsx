// import styles from "./Button.module.css"

const Button = () => {
  const style ={
     padding: "10px 20px",
    fontSize: "3rem",
    fontFamily: "Arial, Helvetica, sans-serif",
    fontWeight: "600",
    border: "none",
    borderRadius: "10px",
    backgroundColor:" hsl(240, 92%, 75%)",
    color:"white",
    cursor: "pointer",
  }
  
  return (
        <button style={style}>Button</button>
  
  )
}

export default Button