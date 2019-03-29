import React,{useState} from 'react';
import ItemList from '../components/ItemList';
import AddItem from '../components/AddItem';
import defaultState from '../defaultState';

function App(){ 
   // Declare a new state variable
  const [items, setItems] = useState(defaultState);

  const todoList = items.filter(item => !item.completed);
  const completedList = items.filter(item => item.completed);

  const onAddItem =(item) =>{
    const toDoItems = [item,...items];

    setItems(toDoItems)
  }

  const onRemoveItem =(itemToRemove) =>{
    const toDoItems = items.filter(item => item.id !== itemToRemove.id);
    setItems(toDoItems);
      
  }

  const onToggle = (toggleItem) =>{
    const toDoItems = items.map(item =>{
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
      <AddItem onSubmit={onAddItem} />
      <ItemList 
            title="ToDo List" 
            list={todoList} 
            onItemChange={onToggle} 
            onRemoveItem = {onRemoveItem} />

      <ItemList
            title="Completed List"
            list={completedList} 
            onItemChange={onToggle} 
            onRemoveItem = {onRemoveItem}/>
      
      <button onClick={markAllCompleted}>Mark All Completed</button>
    </>
  );
}

export default App;