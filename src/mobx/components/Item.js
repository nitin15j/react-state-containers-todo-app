import React, {Component} from 'react';
import {decorate, action} from 'mobx';

class Item extends Component
{
    render()
    {
        const {item} = this.props;
        return (
                <div>
                    <label htmlFor={item.id}>
                        <input 
                            type='checkbox'
                            id={item.id}
                            checked={item.completed}
                            onChange={this.handleToggle}
                        />
                        {item.value}
                    </label>
                    <button className="Item-remove" onClick={this.handleRemove}>
                      Remove
                    </button>
                </div>
        );
    }

  	handleToggle = () => {
		this.props.item.toggle();
    };
    
    handleRemove = () => {
		this.props.item.destroy();
	};
}

decorate(Item, {
	handleToggle: action
  });

export default Item;