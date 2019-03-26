import React, {Component} from 'react';


class Item extends Component
{
    render()
    {
        const {item, onListChange} = this.props;
        return (
                <div>
                    <label htmlFor={item.id}>
                        <input 
                            type='checkbox'
                            id={item.id}
                            checked={item.completed}
                            onChange={onListChange}
                        />
                        {item.value}
                    </label>
                </div>
        );
    }
}

export default Item;