import React, { Component } from 'react'
import MarksTable from './MarksTable';
import StudentInfoComponent  from './StudentInfoComponent';
import SubjectList  from './SubjectList';
import PeriondController from './PeriodController'


class StudentMain extends Component {
constructor() {
   super();   
   this.state = {
      subjectid: 1,
      periodid: 2

   }
} 

  render() {
 
    return (
    <div>
      <div id ='top-bar' class='top-bar'>
        <StudentInfoComponent/>
       <PeriondController setPeriod = {(newperiodid) => this.setState({periodid: newperiodid})} />
      </div>  
     
      <div class="con" >
           <div id = 'side-bar' class = 'side-bar'>
           	<SubjectList setSubject = {(newsubjectid) => this.setState({subjectid: newsubjectid})} />
           </div>
          
          <div id='container'>
          <MarksTable subjectid = {this.state.subjectid} periodid = {this.state.periodid}/>
          </div>
      </div>
      
      </div>
    )
  }
}

export default StudentMain
