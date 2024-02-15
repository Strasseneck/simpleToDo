import { useState } from "react"

export function AddItem({setToDos}) {
  const [toDo, setToDo] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newToDo = { "title": toDo, "priority": 0};
    setToDos(current => [...current, newToDo])
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
  

  