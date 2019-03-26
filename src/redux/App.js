import React,{Component} from 'react';
import ItemList from '../components/ItemList';
import { connect } from "react-redux";
import { toggleItem, markAllItemsCompleted } from './actions';

class App extends Component{

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

      return (<>
                <ItemList 
                          title="ToDo List" 
                          list={todoList}
                          onListChange={this.onToggle}>Hello App
                </ItemList>

                <ItemList 
                          title="Completed List" 
                          list={completedList} 
                          onListChange={this.onToggle}>
                          Hello App
                </ItemList>
                
                <button onClick={this.markAllCompleted}>Mark All Completed</button>

              </>);
  }
}

const mapStateToProps = (state) => {
  return { items: state.items };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleItem: (item) => {
      dispatch(toggleItem(item))
    },
    markAllCompleted: () => {
      dispatch(markAllItemsCompleted())
    }
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(App);