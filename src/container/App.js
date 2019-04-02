import React,{Component} from 'react';
import ItemList from '../components/ItemList';
import AddItem from '../components/AddItem';
import defaultState from '../defaultState';
import Button from '@material-ui/core/Button';

export default class App extends Component{

  constructor(props)
  {
    super(props);
    this.state = {items:defaultState};
  }

  onAddItem =(item) =>{

    this.setState({items:[item,...this.state.items]})
  }

  onRemoveItem =(itemToRemove) =>{
    this.setState({
      items:this.state.items.filter(item => item.id !== itemToRemove.id)
    })
  }

  onToggle = (toggleItem) =>{
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
              <AddItem onSubmit={this.onAddItem} />
              <ItemList 
                    title="ToDo List"
                    list={todoList} 
                    onItemChange={this.onToggle}
                    onRemoveItem = {this.onRemoveItem}/>

              <ItemList 
                    title="Completed List" 
                    list={completedList} 
                    onItemChange={this.onToggle}
                    onRemoveItem = {this.onRemoveItem}/>
                    
              <Button 
                  variant="contained"
                  color="primary" 
                  onClick={this.markAllCompleted} 
                  type="submit"
                  style={{margin: '25px 0 0 30%'}} >Mark All Completed
                </Button>
            </>);
  }

}
