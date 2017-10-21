import React, { Component } from 'react'
import { Link, Switch, Route } from 'react-router-dom'


class Login extends Component {


  render() {


    return (
      <div className='logindiv'>
        <form>
			<input type="text" name="user" placeholder="Username"/>
			<input type="password" name="pass" placeholder="Password"/>
			<input type="submit" name="login" class="login loginmodal-submit" value="Login"/>
		
		</form>
        </div>
    )
  }
}

export default Login