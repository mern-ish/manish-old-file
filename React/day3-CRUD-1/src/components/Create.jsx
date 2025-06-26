import {nanoid}  from "nanoid";
import {useForm} from "react-hook-form"
const Create = (props) => {
    let todos = props.todos;
    let settodos = props.settodos;

    const{
      register,
      handleSubmit,
      reset,
      formState:{ errors}
    } = useForm( )

    const submitHandler =(data)=>{
      data.isComplete=false;
      data.id = nanoid();
      console.log(data);
  
    const copytodos = [...todos];
    copytodos.push(data);
    settodos(copytodos);

    reset();
  };

  console.log(errors);
  return (
    <div className="w-[60%] p-10   rounded-xl  text-white">
      <h1 className="text-7xl font-thin mb-17 ">Set <span className="text-red-700">Remainders</span> for 
      <br />tasks</h1>

      <form onSubmit={handleSubmit(submitHandler)} >
        <input 
        {...register("title",{required:"title can not be empty"})}

        className="border-b-1 w-full p-5 rounded-xs text-3xl outline-none "
          
          type="text" 
          placeholder="title"
        />
        {errors && errors.title && errors.title.message && <small className="text-red-700 text-lg font-thin ">{errors.title.message}</small>}
        <br />
        <br />
        <button className="px-13 py-5  border rounded-xl text-lg">Create Todos</button>
      </form>

    </div>
  )
}

export default Create