import React, {Component} from 'react';
import Item from './Item';

class ItemList extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {searchedValue:''};
    }

    onChange =(event)=>{
        console.log(event.target.value);
        this.setState({searchedValue:event.target.value});
    }

    render()
    {
        const items = this.props.list;

        return (
                    <div>
                        <h2>{`${this.props.title} ${items.length}`}</h2>
                        <input type='input' onChange={this.onChange}/>
                        {
                            items
                            .filter(item => item.value.toLowerCase().includes(this.state.searchedValue.toLowerCase()))
                            .map(item => <Item item={item} onListChange={this.props.onListChange}/>)
                        }
                    </div>
                );
    }
}

export default ItemList;