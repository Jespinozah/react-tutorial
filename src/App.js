import React, { Component } from 'react';
import Button from './components/Button';
import Result from './components/Result';
import './App.css';

class App extends Component {
  state = {counter: 0};

  incrementCounter = (incrementValue)=>{
    this.setState((prevState)=> ({
            counter: this.state.counter +incrementValue
      }));
  }
  render() {
    return (
      <div className="App">
        <Button incrementValue ={1} onClickFunction ={this.incrementCounter}/>
        <Button incrementValue ={2} onClickFunction ={this.incrementCounter}/>
        <Button incrementValue ={3} onClickFunction ={this.incrementCounter}/>
        <Button incrementValue ={4} onClickFunction ={this.incrementCounter}/>
        <Result counterPass = {this.state.counter}/>
      </div>
    );
  }
}

export default App;
