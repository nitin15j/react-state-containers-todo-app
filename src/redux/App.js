import React,{Component} from 'react';
import ItemList from '../components/ItemList';
import { connect } from 'react-redux';
import {addItem,removeItem, toggleItem, markAllItemsCompleted } from './Actions';
import AddItem from '../components/AddItem';
import Button from '@material-ui/core/Button';

class App extends Component{

  onAddItem =(item) =>{
    this.props.addItem(item);
  }

  onRemoveItem =(item) =>{
    console.log('on remove item in  APP ' + item.id);
    this.props.removeItem(item);
  }

  onToggle = (toggleItem) =>{
    this.props.toggleItem({id:toggleItem.target.id});
  }

  markAllCompleted =()=> {
    this.props.markAllCompleted();
  }

  render()
  {
      const todoList = this.props.items.filter(item => !item.completed);
      const completedList = this.props.items.filter(item => item.completed);

      return (
             <>
                  <AddItem onSubmit={this.onAddItem} />
           
                <ItemList 
                          title="ToDo List" 
                          list={todoList}
                          onItemChange={this.onToggle}
                          onRemoveItem = {this.onRemoveItem}
                        />

                <ItemList 
                          title="Completed List" 
                          list={completedList} 
                          onItemChange={this.onToggle}
                          onRemoveItem = {this.onRemoveItem}
                        />
                
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

const mapStateToProps = (state) => {
  return { items: state.items };
};

const mapDispatchToProps = dispatch => {
  return {
    addItem: (item) => {
      dispatch(addItem(item))
    },
    removeItem: (item) => {
      dispatch(removeItem(item))
    },
    toggleItem: (item) => {
      dispatch(toggleItem(item))
    },
    markAllCompleted: () => {
      dispatch(markAllItemsCompleted())
    }
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(App);