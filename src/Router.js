import React, { Component } from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import StudentMain from './StudentView/StudentMain';

import TeacherMain from './TeacherView/TeacherMain';
import Login from './Auth.js'

//тут заимпорть свой компонент


class Router extends Component {


  render() {


    return (
      <div>
        <div className ='main-header'>
      <div>
        <Link to='/'><img src={require('./logo.png')} /></Link>
      </div> 
      <Link to='/'><div className='project-name-div'>Альтернативный дневник ученика
        
      </div> </Link>
      
      <a href='/teacher'><div className='teacher-link-div' >Вход для учителя</div></a> 
    </div>
          
    <Switch>

      <Route exact path='/' component={Login}/>
      <Route exact path='/student/marks' component={StudentMain}/>
      <Route exact path='/teacher' component = {TeacherMain}/>
    </Switch>
       </div>
    )
  }
}

export default Router