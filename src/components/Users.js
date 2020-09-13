import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {

  renderUsers = () => {
    return (
      this.props.users.map((user,index) => {
        return (
          <li key={index}>{`${user.username}: ${user.hometown}`}</li>
        )
      })
    )
  }

  render() {
    return (
      <div>
        {this.props.userCount}
        <ul>
          {/* Write code here that displays the usernames of all users in the Redux store */}
          {/* In addition, display the total number of users currently in the store */}
          {this.renderUsers()}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return { 
    users: state.users,
    userCount: state.users.length
  };
}

// connect this component to Redux
export default connect(mapStateToProps)(Users)
