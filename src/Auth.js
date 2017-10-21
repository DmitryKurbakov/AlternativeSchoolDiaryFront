import React, { Component } from 'react'
import { Link, Switch, Route } from 'react-router-dom'


class Login extends Component {


  render() {


    return (
      <div className='logindiv'>
        <form class="form-signin">
        <h3 class="form-signin-heading">Авторизация</h3>
        <label for="inputEmail" class="sr-only">Имя пользователя</label>
        <input type="email" id="inputEmail" class="form-control" placeholder="Имя пользователя" required="" autofocus=""/>
        <label for="inputPassword" class="sr-only">Пароль</label>
        <input type="password" id="inputPassword" class="form-control" placeholder="Пароль" required=""/>
        <div class="checkbox">
          <label>
            <input type="checkbox" value="remember-me"/> Оставаться в системе
          </label>
        </div>
        <button class="btn btn-lg btn-primary btn-block" type="submit">Войти</button>
      </form>
        </div>
    )
  }
}

export default Login