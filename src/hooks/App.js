import React,{useState} from 'react';
import ItemList from '../components/ItemList';
import defaultState from '../defaultState';

function App()
{
  // Declare a new state variable
  const [items, setItems] = useState(defaultState);

  const todoList = items.filter(item => !item.completed);
  const completedList = items.filter(item => item.completed);
  
  const onToggle = (toggleItem) =>{

    const toDoItems = items.map(item =>
      {
        if(toggleItem.target.id !== item.id) return item;
        return {...item, completed:!item.completed}
      })

      setItems(toDoItems);
  }

  const markAllCompleted =()=> {
    const toDoItems = items.map(item => {
      return {...item, completed:true};
    } )
    
    setItems(toDoItems);
  }

  return (
    <>
      <ItemList title="ToDo List" list={todoList} onListChange={onToggle}>Hello App</ItemList>
      <ItemList title="Completed List" list={completedList} onListChange={onToggle}>Hello App</ItemList>
      <button onClick={markAllCompleted}>Mark All Completed</button>
    </>
  );
}

export default App;