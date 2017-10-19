import React, { Component } from 'react';



const loadStudent = () => {
  return {
        firstname: "John",
        lastname: "Doe"
    }
}

class StudentInfoComponent extends Component {
constructor() {
   super();   
   this.state = {
      student: loadStudent()
   }
} 

 
  render() {
    return (
       <p className='student-name-paragraph'>
       {this.state.student.firstname} 
       {this.state.student.lastname}
      </p>
    );
  }
}

export default StudentInfoComponent;