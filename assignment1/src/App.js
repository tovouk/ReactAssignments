import React, { Component } from 'react';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOuput/UserOutput';
import './App.css';

class App extends Component {

  state = {
    username : "Jose Hinojo"
  }

  setUsernameHandler = (event) =>{
    this.setState({
      username : event.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <UserInput changed={this.setUsernameHandler} username={this.state.username}/>
        <UserOutput username={this.state.username} />
        <UserOutput username="Marc"/>
      </div>
    );
  }
}

export default App;
