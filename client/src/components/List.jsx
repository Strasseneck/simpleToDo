import { useEffect, useState } from "react"
import { ListItem } from "./ListItem"

export function List({list, deleteItem, updateItem}) { 
    const [sortedList, setSortedList] = useState([]);

    useEffect (() => {
        const sorted = list.sort((a, b) => b.priority-a.priority);
        setSortedList(sorted);
    })

    const listItems = sortedList.map((item) => <ListItem item={item} deleteItem={deleteItem} updateItem={updateItem} />)
    return (
    <>
        <p>LIST</p>
        <ul>{listItems}</ul>
    </>
    )
  }
  

  