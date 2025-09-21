import { nanoid } from "nanoid";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Create = (props) => {

const todos=props.todos;
const settodos=props.settodos;
const{
  register,
  handleSubmit,
  reset,
  formState: { errors },
} = useForm()
 

const submithandler = (data) => {
  
  data.id = nanoid();
  data.isCompleted = false;
  console.log(data);

  const copytodos = [...todos];
  copytodos.push(data);
  settodos(copytodos);

  toast.success("Task Created Successfully !")
  
  reset();
  }

  return (
    <div className=" w-[60%] p-10 mx-auto">
    <h1 className="mb-10 text-5xl font-thin ">Set <span className="text-red-400">Reminder</span>  for <br /> tasks</h1>
        <form onSubmit={handleSubmit(submithandler)}>
          <input
            {...register("title", {required: "title is required"})}
            className="border-b p-2 w-full text-2xl font-thin outline-0"
            type="text" 
            placeholder='Task Title' 
          />
          {errors && errors.title && errors.title.message &&(
            <small className="font-thin text-red-400">{errors.title.message}</small>
          )}

        <br /> <br />
          <button className="text-xl px-10 py-2 border rounded mt-5 ">Create Tool</button>
        </form>
      </div>
  )
}

export default Create

