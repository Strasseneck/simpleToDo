import { useState, useEffect } from 'react';
import { List } from './components/List';
import { getAllToDos, addToDo }  from './ApiClient';
import { AddItem } from './components/AddItem';

import './App.css'


function App() {
  const [toDos, setToDos] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await getAllToDos()
        setToDos(res);
      } catch (error) {
        console.log(error);
      }
    })()  
  }, [])

  return (
    <>
     <AddItem setToDos={setToDos} />
     <List list={toDos} />
    </>
  )
}

export default App
