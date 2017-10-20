import React, { Component } from 'react'
import MarksTable from './MarksTable';
import StudentInfoComponent  from './StudentInfoComponent';
import SubjectList  from './SubjectList';
import PeriondController from './PeriodController'

class StudentMain extends Component {


  render() {
 
    return (
    <div>
      <div id ='top-bar' class='top-bar'>
        <StudentInfoComponent/>
       <PeriondController/>
      </div>  
     
      <div class="con" >
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
