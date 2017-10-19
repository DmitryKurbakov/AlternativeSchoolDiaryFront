import React, { Component } from 'react';
import { Link,Switch,Route } from 'react-router-dom'

import ReactTable from "react-table";
import "react-table/react-table.css";



const loadStudents = () => {
    return [{ name: 'John' }, { name: 'Sam' },{ name: 'John' }, { name: 'Sam' },{ name: 'John' }, { name: 'Sam' },{ name: 'John' }, { name: 'Sam' }]
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
               <div className='class-list'>
       
        <ReactTable

          showPagination = {false}
          noDataText ="Нет данных"
          sortable = {false}
          resizable = {false}
          minRows = {1}
          data = {this.state.students}
          columns={[
            {
               accessor: 'name',
               Header: () => <div className='marks-table-header'> <p>Список учеников</p></div>,
               Cell: props => <Link to='/1/1/marks'> <div className='menu'>{props.value}</div> </Link> 
              
            }
            
          ]

        }
        />
        
        </div>
          );
      }
  }

  export default StudentList;