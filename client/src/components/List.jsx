import { ListItem } from "./ListItem"

export function List({list, setToDo}) { 

    const listItems = list.map((item) => <ListItem item={item} setToDo={setToDo} />)
    return (
    <>
        <p>LIST</p>
        <ul>{listItems}</ul>
    </>
    )
  }
  

  