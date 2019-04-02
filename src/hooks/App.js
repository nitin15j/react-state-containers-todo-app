import React,{useState} from 'react';
import ItemList from '../components/ItemList';
import AddItem from '../components/AddItem';
import defaultState from '../defaultState';
import Button from '@material-ui/core/Button';

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
      
      <Button 
          variant="contained"
          color="primary" 
          onClick={markAllCompleted} 
          type="submit"
          style={{margin: '25px 0 0 30%'}} >Mark All Completed
      </Button>
    </>
  );
}

export default App;