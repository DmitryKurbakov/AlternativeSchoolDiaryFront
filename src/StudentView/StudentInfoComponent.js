import React, { Component } from 'react';


const loadStudent = () => {
  return {
    firstname: "Иван",
    lastname: "Иванов"
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
       {this.state.student.lastname+' ' +this.state.student.firstname}
       
      </p>
      );
  }
}

export default StudentInfoComponent;