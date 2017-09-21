import React, { Component } from 'react';
import './Header.css';
import About from './About.js';
import Home from './Home.js';
import Contact from './Contact.js';

import {Row, Col} from 'react-bootstrap';
class Header extends Component {
   render(){
     return(
       <div class="container">
          <Row>
            <Col lg={1}  xs={12} md={8} style={{backgroundColor:"pink", height:"10%"}}>
              <Home />
              <About />
              <Contact />
            </Col>

          </Row>


       </div>
     );
   }
}
export default Header;
