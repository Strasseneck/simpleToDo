import { ListItem } from "./ListItem"

export function List({list}) { 

    const listItems = list.map((item) => <ListItem item={item} />)
    return (
    <>
        <p>LIST</p>
        <ul>{listItems}</ul>
    </>
    )
  }
  

  