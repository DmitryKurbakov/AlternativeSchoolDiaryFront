import React, { Component } from 'react';


const loadSubjects = () => {
    return [{ name: 'Математика' }, { name: 'Русский язык' }]
}



class Subject extends Component {

 constructor() {
      super();
      this.state = {
          subjectName: loadSubjects(),
          subjectid:3
      }
      this.change = this.change.bind(this)

  }


  change(){
    this.props.setSubject(this.state.subjectid)
  }


  render() {
        

              return (                
               <div className = 'menu' onClick={this.change}> { this.props.name } < /div>
          );
      }
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

              menus.push( <Subject name={this.state.listOfSubjects[i].name} setSubject={this.props.setSubject}>  </Subject>);
              }

              return (                
               <div>
              { menus } 
              </div>
          );
      }
  }

  export default SubjectListComponent;