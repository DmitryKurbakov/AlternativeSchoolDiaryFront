import React, { Component } from 'react';


const loadSubjects = () => {
    return [{ name: 'Математика' }, { name: 'Русский язык' }]
}

class SubjectListComponent extends Component {

  constructor() {
      super();
      this.state = {
          listOfSubjects: loadSubjects()
      }

  }


  render() {
          var menus = [];
          for (var i = 0; i < this.state.listOfSubjects.length; i++) {

              menus.push( <div className = 'menu' > { this.state.listOfSubjects[i].name } < /div>);
              }

              return (                
               <div>
              { menus } 
              </div>
          );
      }
  }

  export default SubjectListComponent;