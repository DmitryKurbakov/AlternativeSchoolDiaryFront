import React, { Component } from 'react'
import { Link,Switch,Route } from 'react-router-dom'
import StudentMain from './StudentMain';
import ClassList from './ClassList';
import StudentList from './StudentList';
//тут заимпорть свой компонент


class Router extends Component {


  render() {
    

    return (
       <div>
        <div class ='main-header'>
      <div>
        <img src={require('./logo.png')}/>
      </div> 
      <div class='project-name-div'>Альтернативный дневник ученика
        
      </div> 
      <a href='/teacher'><div class='teacher-link-div' >Вход для учителя</div></a> 
    </div>
          
    <Switch>

      <Route exact path='/' component={ClassList}/>
      <Route path='/:classid/students' component={StudentList}/>
      <Route exact path='/:classid/:studentid/marks' component={StudentMain}/>

      //тут пропиши свой компонент вместо StudentList
      <Route exact path='/teacher' component = {StudentList}/>
    </Switch>
       </div>
    )
  }
}

export default Router