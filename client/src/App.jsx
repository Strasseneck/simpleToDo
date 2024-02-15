import { useState, useEffect } from 'react';
import { List } from './components/List';

import './App.css'
import { AddItem } from './components/AddItem';

function App() {
  const [toDos, setToDos] = useState([{
    'title': 'Make App'
  },
  {
    'title': 'Finish App'
  }
])

  return (
    <>
     <AddItem setToDos={setToDos} />
     <List list={toDos} />
    </>
  )
}

export default App
