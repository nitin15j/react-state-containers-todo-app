import React, {Component} from 'react';


class Item extends Component
{
    render()
    {
        const {item, onItemChange, onRemoveItem} = this.props;
        return (
                <div>
                    <label htmlFor={item.id}>
                        <input 
                            type='checkbox'
                            id={item.id}
                            checked={item.completed}
                            onChange={onItemChange}
                        />
                        {item.value}
                    </label>
                    <button className="Item-remove" onClick={() => onRemoveItem(item)}>
                      Remove
                    </button>
                </div>
        );
    }
}

export default Item;