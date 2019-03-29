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
        const {title, list} = this.props;
        return (
                    <div>
                        <h2>{`${title} ${list.length}`}</h2>
                        <input type='input' onChange={this.onChange}/>
                        {
                            list
                            .filter(item => item.value.toLowerCase().includes(this.state.searchedValue.toLowerCase()))
                            .map(item => <Item key={item.id} item={item}/>)
                        }
                    </div>
                );
    }
}

export default ItemList;