import React, { Component } from 'react';
import './About.css';
import {Row, Col, Button,ButtonToolbar} from 'react-bootstrap';
class About extends Component{
  render(){
    return(
      // <Button bsStyle="" style={btn} bsClass="btn" bsSize="large">Something</Button>

       <Button bsStyle="link" bsSize="large"> About
       </Button>
  //     <ButtonToolbar>
  //    <Button bsStyle="primary" bsSize="small">Small button</Button>
  //    <Button bsSize="small">Small button</Button>
  //  </ButtonToolbar>

    );
  }
}
export default About;
