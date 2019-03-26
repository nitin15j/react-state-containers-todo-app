import React,{Component} from 'react';
import ItemList from '../components/ItemList';
import defaultState from '../defaultState';

export default class App extends Component{

  constructor(props)
  {
    super(props);
    this.state = {items:defaultState};
  }

  onToggle = (toggleItem) =>{
    console.log(toggleItem.target.id);
    const items = this.state.items.map(item =>
      {
        if(toggleItem.target.id !== item.id) return item;
        return {...item, completed:!item.completed}
      })

      this.setState({items:items});
  }

  markAllCompleted =()=> {
    const items = this.state.items.map(item => {
      //item.completed = true;
      return {...item, completed:true};
    } )
    console.log(items[0] === this.state.items[0]);
    
    this.setState({items});
  }

  render()
  {
    const todoList = this.state.items.filter(item => !item.completed);
    const completedList = this.state.items.filter(item => item.completed);

return (<>
              <ItemList title="ToDo List" list={todoList} onListChange={this.onToggle}>Hello App</ItemList>
              <ItemList title="Completed List" list={completedList} onListChange={this.onToggle}>Hello App</ItemList>
              <button onClick={this.markAllCompleted}>Mark All Completed</button>
            </>);
  }

}
