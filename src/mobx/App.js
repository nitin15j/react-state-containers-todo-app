import React, { Component } from 'react';
import { observer } from 'mobx-react';
import ItemList from './components/itemlist';
import AddItem from './components/additem';

import ItemStore from './models/itemstore';
import defaultState from '../defaultState';

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
                <button onClick={this.markAllCompleted}>Mark All Completed</button>
            </>
        )
    }
});

export default AppMobx