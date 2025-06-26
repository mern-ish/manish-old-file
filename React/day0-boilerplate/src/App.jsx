
//

const App = () => {
  //non-parameterized function
 const parafun = ()=>{
  alert("without parameter");
 }
//parameterized function
 const parafun1 = (para)=>{
  alert("paramerter is "+ para);
 }


  return (
    <>
      <h1>Hello World</h1>
      <div>App</div>
      <div>Hello World!</div>
      {/* eventLister & eventHandler */}
      <button onClick={parafun} >click</button>
      <button onClick={()=>parafun1("manish")}>click me</button>

    </>
  )
}

export default App