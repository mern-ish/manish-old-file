const Read = (props) => {
  const todos = props.todos;
  const settodos = props.settodos;

  const renderTodos = todos.map((todo) => {
    return (
      <li key={todo.id} 
        className="p-4 bg-gray-900 rounded mb-2  flex justify-between items-center"
      >
        <span className="font-thin text-lg">{todo.title}</span>
        
        <button
        className="text-red-800 p-2" 
        onClick={()=>deleteHandler(todo.id)}
        >
          
          Delete</button>
      </li>

    );
  });
  
  const deleteHandler = (id) => {
    const filtertodos = todos.filter((todo)=>todo.id != id);
    settodos(filtertodos);
    
  };

  return (
    <div className=" w-[40%] p-10 text-white" >
      <h1 className="text-7xl font-thin mb-17"><span className="text-red-500">Pending</span> Todos</h1>
      <ol>{renderTodos}</ol>
    </div>
  );
};

export default Read;
