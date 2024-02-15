import { useState, useEffect } from 'react';
import { List } from './components/List';
import { getAllToDos, deleteToDo }  from './ApiClient';
import { AddItem } from './components/AddItem';

import './App.css'


function App() {
  const [toDos, setToDos] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await getAllToDos()
        setToDos(res);
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    })()  
  }, [])

  function deleteItem (id) {
    deleteToDo(id)
    setToDos(current => current.filter(elem => elem._id !== id ));     
  }
  

  return (
    <>
     <AddItem setToDos={setToDos} />
     <List list={toDos} deleteItem={deleteItem} />
    </>
  )
}

export default App
