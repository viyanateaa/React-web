import React, { Component } from 'react';
import Header from './Header.js';
import {Row, Col} from 'react-bootstrap';
import './App.css';
// import {Bootstrap, Grid, Row, Col} from 'react-bootstrap';
class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      deadline: ' 2017, Sep, 22',
      newDeadline:''
    }

  }
  changeDeadline(){
    this.setState({deadline:this.state.newDeadline})
  }


  render() {
    return (
            <div className="App">
              <div className="App-title"> Countdown to {this.state.deadline}</div>
              <div className="days"> days</div>
              <div className="hours"> hours</div>
              <div className="minutes"> minutes</div>
              <div className="seconds"> seconds</div>


              <div>
                <input placeholder = 'new date'
                onChange={event => this.setState({newDeadline: event.target.value})}/>
                <button onClick={() => this.changeDeadline()}>
                  Submit
                </button>
              </div>
            </div>

    );
  }
}

export default App;
