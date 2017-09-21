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
       <div class="container" style={{background:"pink"}}>

         <Home />
         <About />
         <Contact />

       </div>
     );
   }
}
export default Header;
