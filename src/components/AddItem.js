import React, { Component } from 'react';
import uniqueId from 'lodash/uniqueId';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';

class AddItem extends Component {
  state = { value: '' };

  handleChange = event => {
    const value = event.target.value;
    this.setState({value});
  };

  handleSubmit = event => {
    const { onSubmit } = this.props;
    const { value } = this.state;

    event.preventDefault();
  
    onSubmit({value, id:uniqueId(), completed:false});
    
   this.setState({value:''});
  };

  render() {
    const { value } = this.state;

    return (
      <Card style={{margin: '15px 2px', borderLeftWidth:'15px', borderLeftColor :'#ea7e7a'}}>
        <form className="AddItem" onSubmit={this.handleSubmit}>
          <TextField
            label="Enter Item here"
            value={value}
            onChange={this.handleChange}
            margin="normal"
            style={{width:'65%'}}
          />
          <Button 
            variant="contained"
            color="primary" 
            type="submit"
            style={{margin: '25px 10px', float: 'right'}} >
          Add Item
        </Button>
        </form>
      </Card>
    );
  }
}

export default AddItem;
