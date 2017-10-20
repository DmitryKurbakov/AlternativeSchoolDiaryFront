import React, { Component } from 'react';



const loadStudent = () => {
  return {
        firstname: "John",
        lastname: "Doe"
    }
}

class PeriodController extends Component {
constructor() {
   super();   
   this.state = {
      student: loadStudent()
   }
} 

 
  render() {
    return (
      <div className='period-controller'>
     
       <select class="form-control period-controller">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>

        </div>
    );
  }
}

export default PeriodController;