import React, { Component } from 'react';


class LoginComponent extends Component {
  render() {
    return (
       <div className="App">
         <form role="form" method="POST">                        
          <fieldset>
              <div className="form-group">
                  <input class="form-control" placeholder="Имя пользователя" name="username"  autofocus/>
              </div>
              <div class="form-group">
                  <input class="form-control" placeholder="Пароль" name="password" type="password" value=""/>
              </div>
              <div>            
              <input class="btn btn-lg btn-success btn-block" value="Войти" type="submit" />
             </div>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default LoginComponent;