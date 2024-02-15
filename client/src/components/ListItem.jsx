import { deleteToDo } from "../ApiClient";

export function ListItem({ item, deleteItem}) {

   function handleCLick () {
      const id = item._id;
      deleteItem(id);   
   }

    return (
      <div>
         <p key={item._id}>{item.title}</p>
         <button>Move Up</button>
         <button>Move Down</button>
         <button onClick={handleCLick}>delete</button>
      </div>
    )
  }
  
  