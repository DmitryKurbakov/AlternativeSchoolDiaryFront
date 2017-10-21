import React from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";
import { Link } from 'react-router-dom'


class ResultsTable extends React.Component {

  render() {

    return (
      <div className='marks'>

            
      <table className = "table table-bordered">
      
      <tbody>
        <tr className='result-tr'>
          <td>Итог: 40/270 (неуд)</td>
          <td>10/65(неуд)</td>
          <td>10/65(неуд)</td>
          <td>10/65(неуд)</td>
          <td>10/65(неуд)</td>
        </tr>
        
        
        
      </tbody>
    </table>

            </div>

      );
  }
}





export default ResultsTable;