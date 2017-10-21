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
                {student: "Иванов Иван Иванович", "":""},
                {student: "Иванов Иван Иванович", "":""},
                {student: "Иванов Иван Иванович", "":""},
                {student: "Иванов Иван Иванович", "":""},
                {student: "Иванов Иван Иванович", "":""},
                {student: "Иванов Иван Иванович", "":""},
                {student: "Иванов Иван Иванович", "":""},
                {student: "Иванов Иван Иванович", "":""},
                {student: "Иванов Иван Иванович", "":""},
                {student: "Иванов Иван Иванович", "":""},
                {student: "Иванов Иван Иванович", "":""},
                {student: "Иванов Иван Иванович", "":""}]
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
                            Header: "Ученик",
                            accessor: "student",
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