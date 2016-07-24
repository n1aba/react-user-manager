import React, { Component } from 'react'
import './css/userForm.css'

class UserForm extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    var newUserName = this.refs.userName.value;
    if(newUserName) {
      this.props.addUser({newUserName});
      this.refs.form.reset();
    }
  }

  render () {
    return (
      <form ref="form" onSubmit={this.onSubmit}>
        <input type="text" ref="userName" placeholder="add new user..."/>
        <button type="submit" className="add-btn">Add</button>
      </form>
    );
  }
}

export default UserForm
