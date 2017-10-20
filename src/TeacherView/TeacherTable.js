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
        this.state ={
            data: [
                {date: "20.10.2017", "":""},
                {date: "21.10.2017","":""},
                {date: "22.10.2017","":""},
                {date: "23.10.2017","":""},
                {date: "24.10.2017","":""},
                {date: "25.10.2017","":""},
                {date: "26.10.2017","":""},
                {date: "27.10.2017","":""},
                {date: "28.10.2017","":""},
                {date: "29.10.2017","":""}]
        };
        this.renderEditable = this.renderEditable.bind(this);
    }


    renderEditable(cellInfo) {
        return (
            <div
                style={{ backgroundColor: "#fafafa" }}
                contentEditable
                suppressContentEditableWarning
                onBlur={e => {
                    const data = [...this.state.data];
                    data[cellInfo.index][cellInfo.column.id] = e.target.innerHTML;
                    this.setState({ data });
                }}
                dangerouslySetInnerHTML={{
                    __html: this.state.data[cellInfo.index][cellInfo.column.id]
                }}
            />
        );
    }
    render() {
        const { data } = this.state;
        return (
            <div>
                <ReactTable
                    data={data}
                    columns={[
                        {
                            Header: "Дата",
                            accessor: "date",
                        },
                        {
                            Header: <span className='multiline-table-header'>Аттестационные работы</span>,
                            accessor: "tests",
                            Cell: this.renderEditable

                        },
                        {
                            Header: <span className='multiline-table-header'>Домашнее задание и ведение тетради</span>,
                            accessor: "homework",
                            Cell: this.renderEditable
                        },
                        {
                            Header: <span className='multiline-table-header'>Проектная деятельность</span>,
                            accessor: "projects",
                            Cell: this.renderEditable
                        },
                        {
                            Header: <span className='multiline-table-header'>Работа на уроках</span>,
                            accessor: "lessons",
                            Cell: this.renderEditable
                        },
                    ]}
                    defaultPageSize={10}
                    className="-striped -highlight"
                />
                <br />

            </div>
        );
    }
}