import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import TodoListStore from '../mobx/models/TodoListStore';
import ItemList from '../components/ItemList';
import { decorate } from "mobx";
import { observer } from "mobx-react";

const App = observer(class App extends Component
{
    constructor() {
        super();
        this.store = new TodoListStore();
      }

    render() 
    {
        console.log(this.store);
        return (
            <ItemList title="ToDo List" items={this.store} >Hello App</ItemList>
        )
    }
});

export default App