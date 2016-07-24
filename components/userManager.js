import React, { Component } from 'react'
import UserForm from './userForm.js'
import UserList from './userList.js'
import './css/userManager.css'

class UserManager extends Component {
  constructor (props) {
    super(props);
    this.addUser = this.addUser.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
    this.state = {users: [] };
    this.usersArrayCopy = this.state.users;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextState, this.state);
    if (nextState != this.state) {
        console.log("true");
        return true;
    } else {
        console.log("false");
        return false;
    }
  }

  addUser(newUser) {
    this.usersArrayCopy.push({
      id: this.usersArrayCopy.length++,
      name: newUser.newUserName,
    });
    this.setState({users: this.usersArrayCopy});
  }

  deleteUser (id) {
    this.usersArrayCopy.splice(id, 1);
    this.setState({users: this.usersArrayCopy});
  }

  render() {
    return (
      <div id="user-manager">
        <UserForm addUser={this.addUser}/>
        <UserList users={this.state.users} deleteUser={this.deleteUser}/>
      </div>
    );
  }
}

export default UserManager
