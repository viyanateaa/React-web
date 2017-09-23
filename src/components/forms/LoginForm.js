import React from 'react';
import {Form,Button } from 'semantic-ui-react';

class LoginForm extends React.Component {
  state= {
    data:{},
    loading:false,
    errors:{}


  }
  onChange = e => this.setState({ data:{...this.state.data,[e.target.name]:e.target.value}});
  render(){
    const{data }=this.state;

    return(
      <Form>
        <Form.Field>
          <label htmlfor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="example@gmail.com"
            value={data.email}
            onChange={this.onChange}
          />
        </Form.Field>
        <Form.Field>
          <label htmlfor="password">password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="your password"
            value={data.email}
            onChange={this.onChange}
          />
        </Form.Field>
        <Button priamry>Login</Button>

      </Form>
    );
  }
}

export default LoginForm;
