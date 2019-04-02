import React, {Component} from 'react';
import {decorate, action} from 'mobx';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

class Item extends Component
{
    render()
    {
        const {item} = this.props;
        return (
                <div>
                    <label htmlFor={item.id}>
                    <Checkbox 
                            id={item.id}
                            checked={item.completed}
                            onChange={this.handleToggle} 
                            />
                        {item.value}
                    </label>
                   
                    <IconButton title="Delete">
                     <DeleteIcon onClick={this.handleRemove}/>
                    </IconButton> 
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