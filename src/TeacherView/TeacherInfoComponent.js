import React, { Component } from 'react';



class TeacherInfoComponent extends Component {

 

  constructor() {
    super();

    this.loadData = this.loadData.bind(this);

    this.state = {
      student: '' 

   }


   
  }
  componentDidMount(){
    this.loadData()
  }
 
   loadData()

  { 
    console.log(this.state.student)

    fetch('http://localhost:8080', {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json',
       }

    }).then(response => response.json()).then( json=> this.setState({name: json.name, lastname:json.lastname }) )
  }


  render() {
    console.log(this.state.student)
    return (
      <p className='student-name-paragraph'>
       {this.state.name + ' ' + this.state.lastname}
       
      </p>
      );
  }
}

export default TeacherInfoComponent;