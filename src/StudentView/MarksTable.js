import React from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";
import { Link } from 'react-router-dom'


class MarksTable extends React.Component {


  render() {

    return (
      <div className='marks'>            
      <ReactTable
      showPagination = { false } 
      noDataText = "Нет данных"
      sortable = { false } 
      resizable = { false } 
      contentEditable = {true}
      minRows = { 6 } 
      columns = {
      [
        {
          Header: () => <div className = 'marks-table-header'> <p> Дата </p></div >,
          
        },

        {
          Header: () => <div className = 'marks-table-header' > <p> Аттестационные </p> <p>работы</p > </div>,
        },

        {
          Header: () => <div className = 'marks-table-header' > < p > Домашние задания </p> и ведение тетради</div >,
        },
        {
          Header: () => <div className = 'marks-table-header' > <p> Проектная </p><p> деятельность</p >  </div>,
        },
        {
          Header: () => <div className = 'marks-table-header' > < p > Работа на уроке < /p></div>,
        }
      ]

      }
      /> 
      </div>

      );
  }
}

export default MarksTable;