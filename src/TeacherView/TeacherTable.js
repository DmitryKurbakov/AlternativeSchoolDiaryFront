import React from "react";
import { render } from "react-dom";
//import { makeData, Logo, Tips } from "./Utils";

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

export default class TeacherTable extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [{"firstName" : "Doma", "lastName" : "Peta"}]
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
                            Header: "Аттестационные работы",
                            accessor: "tests",
                            Cell: this.renderEditable
                        },
                        {
                            Header: "Домашнее задание и ведение тетради",
                            accessor: "homework",
                            Cell: this.renderEditable
                        },
                        {
                            Header: "Проектная Деятельность",
                            accessor: "projects",
                            Cell: this.renderEditable
                        },
                        {
                            Header: "работа на уроках",
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