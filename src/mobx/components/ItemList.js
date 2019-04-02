import React, {Component} from 'react';
import Item from './Item';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

class ItemList extends Component
{
    pageStyle = {
        margin:'20px 0 0 0',
        border: '2px solid',
        borderColor: 'white #34a853 white #fbbc05'
    };

    constructor(props)
    {
        super(props);
        this.state = {searchedValue:''};

        this.pageStyle.borderColor = '#fbbc05 white white white'
        
        if(this.props.list.length > 0 && this.props.list[0].completed)  
        this.pageStyle.borderColor = '#34a853 white white white'
    }

    onChange =(event)=>{
        this.setState({searchedValue:event.target.value});
    }

    render()
    {
        const {title, list} = this.props;
        return (
                    <Paper style = {this.pageStyle} >
                        <Typography variant="h6" style={{margin:'10px 0 0 35%'}}>{`${title} (${list.length})`}</Typography>
                        <TextField
                            label="Filter here"
                            onChange={this.onChange}
                            style={{width:'100%'}}/>
                        <div style={{maxHeight: '300px', overflow: 'auto'}}>
                            {
                                list
                                .filter(item => item.value.toLowerCase().includes(this.state.searchedValue.toLowerCase()))
                                .map(item => <Item key={item.id} item={item}/>)
                            }
                        </div>
                    </Paper>



                );
    }
}

export default ItemList;