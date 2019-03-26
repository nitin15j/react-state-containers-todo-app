import React,{useState} from 'react';
import uniqueId from 'lodash/uniqueId';
import ItemList from '../components/ItemList';
import defaultState from '../defaultState';

function App()
{
  // Declare a new state variable
  const [items, setItems] = useState(defaultState);

  const todoList = items.filter(item => !item.completed);
  const completedList = items.filter(item => item.completed);
  
  const onToggle = (toggleItem) =>{

    console.log(items);

    const items = items.map(item =>
      {
        if(toggleItem.target.id !== item.id) return item;
        return {...item, completed:!item.completed}
      })

      setItems(items);
  }

  const markAllCompleted =()=> {
    const items = items.map(item => {
      return {...item, completed:true};
    } )
    
    setItems(items);
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