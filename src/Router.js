import React, { Component } from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import StudentMain from './StudentView/StudentMain';
import ClassList from './StudentView/ClassList';
import StudentList from './StudentView/StudentList';
import TeacherView from './TeacherView/TeacherView';
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

      <Route exact path='/' component={ClassList}/>
      <Route path='/:classid/students' component={StudentList}/>
      <Route exact path='/:classid/:studentid/marks' component={StudentMain}/>

      //тут пропиши свой компонент вместо StudentList
      <Route exact path='/teacher' component = {TeacherView}/>
    </Switch>
       </div>
    )
  }
}

export default Router