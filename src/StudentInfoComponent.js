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

  componentWillMount()  {
  

    
  }

  render() {
    return (
       <div className="App">
       {this.state.student.firstname} 
       {this.state.student.lastname}
      </div>
    );
  }
}

export default StudentInfoComponent;