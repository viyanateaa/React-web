import React from 'react';
import {Route} from "react-router-dom";
import {Link}from "react-router-dom";
import LoginForm from "../forms/LoginForm";
// import { connect } from "react-redux";
class LoginPage extends React.Component {

  render() {
    return (
      <div>
        <h1>Login page</h1>

        <LoginForm submit ={this.submit} />


      </div>
    );
  }
}
export default LoginPage;
