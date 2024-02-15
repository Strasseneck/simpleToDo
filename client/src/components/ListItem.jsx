import { deleteToDo } from "../ApiClient";

export function ListItem({ item, setToDos }) {

   async function handleCLick () {
      console.log(item._id);
      await deleteToDo(item._id)
      setToDos((current) => {(current.filter((el) => el._id !== item._id))})
   }
    return (
      <div>
         <p key={item._id}>{item.title}</p>
         <button onClick={handleCLick}>delete</button>
      </div>
    )
  }
  
  