import React from "react";
import { render } from "react-dom";
//import { makeData, Logo, Tips } from "./Utils";

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";


const makeDefaultState = () => ({
    sorted: [],
    page: 0,
    pageSize: 10,
    expanded: {},
    resized: [],
    filtered: []
});

export default class TeacherTable extends React.Component {
    constructor() {
        super();
        
    }


    
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
          Header: () => <div className = 'marks-table-header'> <p> Имя</p></div >,
          
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