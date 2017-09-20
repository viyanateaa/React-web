import React, { Component } from 'react';
import './Header.css';
import About from './About.js';
import Home from './Home.js';
import Contact from './Contact.js';

class Header extends Component {
   render(){
     return(
       <div>
         <Home />
         <About />
         <Contact />

       </div>
     );
   }
}
export default Header;
