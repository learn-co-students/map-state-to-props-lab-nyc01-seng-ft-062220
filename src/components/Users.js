import React, { Component } from 'react';
import { connect } from 'react-redux';
class Users extends Component {

  mapUsers = () => {
    return this.props.users.map((user, index) => <li key={index}>{`${user.username}: ${user.hometown}`}</li>)
  }

  render() {
    return (
      <div>
        <ul>
          Users!
          {this.mapUsers()}
          <p>{this.props.userCount} user(s) online</p>
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { 
    users: state.users,
    userCount: state.users.length
   }
}

// connect this component to Redux
export default connect(mapStateToProps)(Users)
