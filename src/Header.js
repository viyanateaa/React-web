import React, { Component } from 'react';
import './Header.css';
import About from './About.js';
import Home from './Home.js';
import Contact from './Contact.js';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
class Header extends Component {
   render(){
     return(
       <div class="container">
          <div class ="row">
            <div class="col-sm-12" style={{backgroundColor:"pink", height:"10%"}}>
              <Home />
              <About />
              <Contact />
            </div>

          </div>


       </div>
     );
   }
}
export default Header;
