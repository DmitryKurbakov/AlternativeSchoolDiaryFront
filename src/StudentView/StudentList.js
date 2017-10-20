import React, { Component } from 'react';
import { Link} from 'react-router-dom'

import ReactTable from "react-table";
import "react-table/react-table.css";



const loadStudents = () => {
    return [{ name: 'John' }, { name: 'Sam' },{ name: 'John' }, { name: 'Sam' },{ name: 'John' }, { name: 'Sam' },{ name: 'John' }, { name: 'Sam' },
    { name: 'John' }, { name: 'Sam' },{ name: 'John' }, { name: 'Sam' },{ name: 'John' }, { name: 'Sam' },{ name: 'John' }, { name: 'Sam' },
    { name: 'John' }, { name: 'Sam' },{ name: 'John' }, { name: 'Sam' },{ name: 'John' }, { name: 'Sam' },{ name: 'John' }, { name: 'Sam' }]
}

class StudentList extends Component {

  constructor() {
      super();
      this.state = {
          students: loadStudents(),
          
      }

  }


  render() {
          

              return (    

              <div>            
               <div className='class-list'>
       
        <ReactTable
            showPageSizeOptions = {false}
          showPagination = {true}
          defaultPageSize = {7}
          sortable = {false}
          resizable = {false}
          minRows = {1}
          data = {this.state.students}
          previousText = 'Назад'
          nextText = 'Вперед'
          loadingText =  'Загрузка...'
          noDataText = 'Нет данных'
          pageText = 'Стр'
          ofText = 'из'
          rowsText = 'строк'
          
          columns={[
            {
               accessor: 'name',
               Header: () => <div className='marks-table-header'> <p>Список учеников:</p></div>,
               Cell: props => <Link to='/1/1/marks'> <div className='table-cell'>{props.value}</div> </Link> 
              
            },

            
          ]

        }
        />
        
        </div>
        <Link to='/' className='btn btn-default' >К выбору класса</Link> 
        </div>
          );
      }
  }

  export default StudentList;