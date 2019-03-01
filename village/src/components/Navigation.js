import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

class Navigation extends Component {
  render() {
    return (
      <div>
        <h2>The Smurfs!</h2>
        <NavLink to="/smurf-form">Add Smurf</NavLink>
        <NavLink to="/">View Smurfs</NavLink>
      </div>
    )
  }
}

export default Navigation;