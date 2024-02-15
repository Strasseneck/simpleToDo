import { useState, useEffect } from 'react';
import { List } from './components/List';
import { getAllToDos }  from './ApiClient';
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

  return (
    <>
     <AddItem setToDos={setToDos} />
     <List list={toDos} setToDos={setToDos} />
    </>
  )
}

export default App
