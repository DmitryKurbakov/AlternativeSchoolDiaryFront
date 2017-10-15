import React, { Component } from 'react';
import '../App.css';


import ReactTable from "react-table";
import "react-table/react-table.css";

class MarksTable extends React.Component {
  
  render() {
    
    return (
      <div>
        <ReactTable
          showPagination = {false}
          noDataText="Нет данных"
          columns={[
            {
              Header: "Предмет",

              
            },
            {
              Header: "Дата",
              columns: [
                {
                  Header: "Дата1",
                  
                },
                {
                  Header: "Дата1",
                  
                },
                {
                  Header: "Дата1",
                  
                },
                {
                  Header: "Дата1",
                  
                },
                {
                  Header: "Дата1",
                  
                },
                {
                  Header: "Дата1",
                  
                },
              ]
            },
            
          ]}
        />
        <br />
        
      </div>
    );
  }
}





export default MarksTable;