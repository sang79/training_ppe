import React, { Component } from 'react';
import './assets/css/dist/tailwind.css';
// import Register from './ppe_training/Account/Register';
import Login from './ppe_training/Account/Login';
import ForgotPassword from './ppe_training/Account/ForgotPassword';

class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Login />
    )
  }
}

export default App;
