import React from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";
import { Link } from 'react-router-dom'


class MarksTable extends React.Component {

  render() {

    return (
      <div>

            
      <ReactTable

      showPagination = { false } noDataText = "Нет данных"
      sortable = { false } resizable = { false } minRows = { 5 } columns = {
      [{
        Header: () => <div className = 'marks-table-header' > <p> Дата </p></div >,

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
            <Link to = '/{this.props.match.params.classid}/students'
      className = 'btn btn-default to-student'> К выбору ученика </Link> 
            </div>

      );
  }
}





export default MarksTable;