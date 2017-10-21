import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import ReactTable from "react-table";
import "react-table/react-table.css";


const loadClasses = () => {
  return [{
    "num": "11",
    "flow": ["11 А", "11 B"]
  }, {
    "num": "10",
    "flow": ["10 А", "10 B"]
  }]
}





class ClassList extends Component {

  constructor() {
    super();
    this.state = {
      classes: loadClasses()
    }


  }
  render() {

    // сортировка классов по возрастанию
    this.state.classes.sort((a, b) => a.num - b.num);
    var listOfClasses = [];
    for (var i = 0; i < this.state.classes.length; i++) {

      listOfClasses.push(

        <Link to = '/1/students' >
                <div className = 'menu' > {this.state.classes[i].num + ' класс'} 
                </div> 
                </Link>
      );

    }
    return (
      <div className = 'class-list' >
            <div className = 'menu' >
            Список классов:
            </div> { listOfClasses } 
            </div>
    )
  }
}

export default ClassList