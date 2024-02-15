import { ListItem } from "./ListItem"

export function List({list, deleteItem, updateItem}) { 

    const listItems = list.map((item) => <ListItem item={item} deleteItem={deleteItem} updateItem={updateItem} />)
    return (
    <>
        <p>LIST</p>
        <ul>{listItems}</ul>
    </>
    )
  }
  

  