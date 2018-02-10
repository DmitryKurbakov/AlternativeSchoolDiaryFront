import React, { Component } from 'react'
import { Link, Switch, Route } from 'react-router-dom'


class Login extends Component {
 constructor() {
    super();
     this.state = {
      username: null,
      password: null
    };
    
    this.handleChange = this.handleChange.bind(this);
    this.click = this.click.bind(this);
  }
    
  


  click(event) {
    fetch('https://mywebsite.com/endpoint/', {
       method: 'POST',
      headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    username: this.state.username,
    password: this.state.password,
  })
})
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value
    });
  }


  render() {


    return (
      <div className='logindiv'>
        <form class="form-signin">
        <h3 class="form-signin-heading">Аутентификация</h3>
        <label for="inputEmail" class="sr-only">Имя пользователя</label>
        <input name = 'username' type="username" id="inputEmail" class="form-control" placeholder="Имя пользователя" required=""  onChange={this.handleChange} autofocus=""/>
        <label for="inputPassword" class="sr-only">Пароль</label>
        <input name = 'password'  type="password" id="inputPassword" class="form-control" placeholder="Пароль" onChange={this.handleChange} required=""/>
        <div class="checkbox">
          <label>
            <input type="checkbox" value="remember-me"/> Оставаться в системе
          </label>
        </div>
        <button class="btn btn-lg btn-primary btn-block" type="submit" onClick={this.click} >Войти</button>
      </form>
        </div>
    )
  }
}

export default Login