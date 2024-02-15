import { deleteToDo } from "../ApiClient";

export function ListItem({ item, deleteItem, updateItem}) {

   function handleCLick () {
      const id = item._id;
      deleteItem(id);   
   }

   function moveUp () {
      const id = item._id;
      updateItem(id, 'up');
   }

   function moveDown () {
      const id = item._id;
      updateItem(id, 'down');
   }

    return (
      <div key={item._id}>
         <p>{item.title}</p>
         <button onClick={moveUp}>Move Up</button>
         <button onClick={moveDown}>Move Down</button>
         <button onClick={handleCLick}>delete</button>
      </div>
    )
  }
  
  