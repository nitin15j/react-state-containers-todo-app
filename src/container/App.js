import React,{Component} from 'react';
import uniqueId from 'lodash/uniqueId';
import ItemList from '../components/ItemList';

const defaultState = [
  { value: 'Met my HR', id: uniqueId(), completed: false },
  { value: 'Submitted all BGV docs', id: uniqueId(), completed: false },
  { value: 'SEZ card', id: uniqueId(), completed: false },
  { value: 'Access to My HCL', id: uniqueId(), completed: false },
  { value: 'Downloaded Medical card', id: uniqueId(), completed: true },
  { value: 'Awareness about iTime', id: uniqueId(), completed: false },
  { value: 'Updated seat no. in ESS', id: uniqueId(), completed: false },
  { value: 'Updated Aadhar, UAN & PAN no. in ESS', id: uniqueId(), completed: false },
  { value: 'Vehichal declaration', id: uniqueId(), completed: false },
  { value: 'E-learnings on iSucess', id: uniqueId(), completed: true },
  { value: 'Flexi declaration', id: uniqueId(), completed: true },
];

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
