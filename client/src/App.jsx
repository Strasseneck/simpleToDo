import { useState, useEffect } from 'react';
import { List } from './components/List';

import './App.css'

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
     <List list={toDos} />
    </>
  )
}

export default App
