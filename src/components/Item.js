import React, {Component} from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

class Item extends Component
{
    render()
    {
        const {item, onItemChange, onRemoveItem} = this.props;
        return (
                <div>
                    <label htmlFor={item.id}>
                        <Checkbox 
                            id={item.id}
                            checked={item.completed}
                            onChange={onItemChange} 
                            />
                        {item.value}
                    </label>
                    <IconButton title="Delete">
                     <DeleteIcon onClick={() => onRemoveItem(item)}/>
                    </IconButton> 
                </div>
        );
    }
}

export default Item;