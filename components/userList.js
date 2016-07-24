import React, { Component } from 'react'
import User from './user.js'
import './css/userList.css'

class UserList extends Component {
  render () {
    var users = this.props.users.map((userone, id) => {
      return (
        <User key={id} userone={userone} id={id} deleteUser={this.props.deleteUser}/>
      );
    });
    return (
      <ul className="user-list">{users}</ul>
    );
  }
}

export default UserList
