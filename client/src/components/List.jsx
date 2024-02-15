import { ListItem } from "./ListItem"

export function List({list, deleteItem}) { 

    const listItems = list.map((item) => <ListItem item={item} deleteItem={deleteItem} />)
    return (
    <>
        <p>LIST</p>
        <ul>{listItems}</ul>
    </>
    )
  }
  

  