import React, { Component } from 'react'
import { Link} from 'react-router-dom'

import ReactTable from "react-table";
import "react-table/react-table.css";


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
    

    return (
       <div className='class-list'>
       
        <ReactTable

          showPagination = {false}
          minRows = {1}
          noDataText ="Нет данных"
          sortable = {false}
          resizable = {false}
          data = {this.state.classes}
          columns={[
            {
               accessor: 'name',
               Header: () => <div className='marks-table-header'> <p>Список классов</p></div>,
               Cell: props => <Link to='/1/students'> <div className='menu'>{props.value+' класс'}</div> </Link> 
              
            }
            
          ]

        }
        />
        
        </div>
    )
  }
}

export default ClassList
