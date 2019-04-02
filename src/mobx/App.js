import React, { Component } from 'react';
import { observer } from 'mobx-react';
import ItemList from './components/ItemList';
import AddItem from './components/AddItem';
import ItemStore from './models/ItemStore';
import defaultState from '../defaultState';
import Button from '@material-ui/core/Button';

const AppMobx = observer(class AppMobx extends Component
{
    itemStore;

    constructor(props)
    {
        super(props);
        this.itemStore = ItemStore.fromJS(defaultState);
    }

    addItem =(item) =>{
        this.itemStore.addItem(item.value);
    }

    markAllCompleted =()=> {
        this.itemStore.toggleAll(true);
    }
      
    render() 
    {
        const todoList = this.itemStore.items.filter(item => !item.completed);
        const completedList = this.itemStore.items.filter(item => item.completed);

        return (
                   <>     
            <AddItem onSubmit={this.addItem} />
               <ItemList 
                        title="ToDo List" 
                        list={todoList}
                />
                <ItemList 
                        title="Completed List" 
                        list={completedList}
                />
                <Button 
                  variant="contained"
                  color="primary" 
                  onClick={this.markAllCompleted} 
                  type="submit"
                  style={{margin: '25px 0 0 30%'}} >Mark All Completed
                </Button>
                </>
           
        )
    }
});

export default AppMobx