import React, { Component } from 'react'
import { Link,Switch,Route } from 'react-router-dom'
import MarksTable from './MarksTable';

const loadClasses = () => {
  return [{"name": "11", "flows":["11 А","11 B"]},{"name": "10","flows":["11 А","11 B"]},]
}





class ClassList extends Component {

  constructor() {
   super();   
   this.state = {
      classes: loadClasses()
   }
} 
  render() {
    var listOfClasses = []
    for (var i = 0; i < this.state.classes.length; i++) {

             listOfClasses.push( 
              
              <Link to='/1/students'> 
              <div className = 'menu-class'>
              {this.state.classes[i].name}
              </div>
              </Link> 
              );
    
    }

    return (
       <div className = 'class-list'>
          {listOfClasses} 
          
       </div>
    )
  }
}

export default ClassList
