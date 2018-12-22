import React, { Component } from 'react';
import Validation from './Validation/Validation';
import Char from './Char/Char';
import './App.css';

class App extends Component {

  state = {
    userInput : ''
  }

  inputChangeHandler = (event) =>{
    this.setState({userInput:event.target.value});
  }

  deleteCharHandler = (index) =>{
    const copiedText = this.state.userInput.split('');
    copiedText.splice(index,1);
    const newText = copiedText.join('');
    this.setState({userInput:newText});
  }

  render() {
    const charList = this.state.userInput.split('').map( (character, index) => {
      return <Char char={character} key={index} clicked={ () => this.deleteCharHandler(index)}/>
    });

    return (
      <div className="App">
        <input type="text" value={this.state.userInput} onChange={this.inputChangeHandler} />
        <p>{this.state.userInput}</p>
        <Validation inputLength={this.state.userInput.length} />
        {charList}
      </div>
    );
  }
}

export default App;
