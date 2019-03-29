import React, { Component } from 'react';
import uniqueId from 'lodash/uniqueId';

class AddItem extends Component {
  state = { value: '' };

  handleChange = event => {
    // Do something when the state of this input changes.
    const value = event.target.value;
    this.setState({value});
  };

  handleSubmit = event => {
    const { onSubmit } = this.props;
    const { value } = this.state;

    event.preventDefault();
  
    onSubmit({value, id:uniqueId(), completed:false});
    
    // Reset state of component.
    this.setState({value:''});
  };

  render() {
    const { value } = this.state;

    return (
      <form className="AddItem" onSubmit={this.handleSubmit}>
        <input
          className="AddItem-input"
          type="text"
          value={value}
          onChange={this.handleChange}
        />
        <input className="AddItem-submit button" type="submit" />
      </form>
    );
  }
}

export default AddItem;
