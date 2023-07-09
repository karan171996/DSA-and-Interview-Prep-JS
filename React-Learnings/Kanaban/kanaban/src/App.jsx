import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [todo, setTodo] = useState({
    todo: {
      id: 'todo',
      title: 'Todo',
      items: [
        {id: 'item-1', content: 'Item 1'},
        {id: 'item-2', content: 'Item 2'},
        {id: 'item-3', content: 'Item 3'},
      ]
    },
    inProgress: {
      id: 'inProgress',
      title: 'In Progress',
      items: [
        {id: 'item-4', content: 'Item 4'},
        {id: 'item-5', content: 'Item 5'},
        {id: 'item-6', content: 'Item 6'},
      ]
    },
    done: {
      id: 'done',
      title: 'Done',
      items: []
    }
  });
  const [draggeditem, setDraggedItem] = useState(null);

  const handleDragStart =(e, item) => {
    setDraggedItem(item)
  }

  const handleDragEnter = (e, targetItem) => {
    
  }

  return (
    <>

    </>
  )
}

export default App
