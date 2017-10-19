import React, { Component } from 'react'
import { Link,Switch,Route } from 'react-router-dom'
import StudentMain from './StudentMain';
import ClassList from './ClassList';
import StudentList from './StudentList';



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
      <div class='teacher-link-div'>Вход для учителя</div> 
    </div>
          
    <Switch>

      <Route exact path='/' component={ClassList}/>
      <Route exact path='/:classid/:studentid/marks' component={StudentMain}/>
      <Route path='/:classid/students' component={StudentList}/>
    </Switch>
       </div>
    )
  }
}

export default Router