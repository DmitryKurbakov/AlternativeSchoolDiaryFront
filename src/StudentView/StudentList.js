import React, { Component } from 'react';
import { Link,Switch,Route } from 'react-router-dom'

const loadStudents = () => {
    return [{ name: 'John' }, { name: 'Sam' }]
}

class StudentList extends Component {

  constructor() {
      super();
      this.state = {
          students: loadStudents(),
          
      }

  }


  render() {
          var menus = [];
          for (var i = 0; i < this.state.students.length; i++) {

              menus.push(<Link to='/marks'> <div className = 'menu' > { this.props.match.params.classid} </div></Link>);
              }

              return (                
               <div>
              { menus } 
              </div>
          );
      }
  }

  export default StudentList;