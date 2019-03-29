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
                            .map(item => <Item 
                                                key={item.id} 
                                                item={item} 
                                                onItemChange={this.props.onItemChange}
                                                onRemoveItem={this.props.onRemoveItem}
                                                />
                                                )
                        }
                    </div>
                );
    }
}

export default ItemList;