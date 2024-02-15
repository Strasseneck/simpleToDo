export function ListItem({ item }) {
    return (
       <p key={item._id}>{item.title}</p>
    )
  }
  
  