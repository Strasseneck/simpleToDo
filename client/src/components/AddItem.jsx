import { useState } from "react"
import { addToDo } from "../ApiClient";

export function AddItem({setToDos}) {
  const [toDo, setToDo] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newToDo = { "title": toDo, "priority": 1};
    const res = await addToDo(newToDo);
    console.log(res);
    setToDos(current => [...current, res])
    setToDo('');
  }

  const handleChange = (event) => {
    setToDo(event.target.value);
  }

    return (
      <>
       <form id="add-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Add todo..." value={toDo} onChange={handleChange}></input>
        <button type="submit" >Add</button>
       </form>
      </>
    )
  }
  

  