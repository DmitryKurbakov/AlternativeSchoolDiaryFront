import React, { Component } from 'react'
import { Link,Switch,Route } from 'react-router-dom'
import MarksTable from './MarksTable';
import StudentInfoComponent  from './StudentInfoComponent';
import SubjectList  from './SubjectList';


class StudentMain extends Component {


  render() {
 
    return (
    <div>
      <div id ='top-bar' class='top-bar'>
        <StudentInfoComponent/>
      </div>  
     
      <div class="container" >
           <div id = 'side-bar' class = 'side-bar'>
           	<SubjectList/>
           </div>
          
          <div id='container'>
          <MarksTable/>
          </div>
      </div>
      
      </div>
    )
  }
}

export default StudentMain
