import React from 'react';
import {useSelector} from "react-redux";
import {TodoDeleteAlert} from "./TodoDeleteAlert";
import {TodoEditAlert} from "./TodoEditAlert";

const TodoList = () => {

    const todoItems = useSelector((state) => state.todo.value)

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <table className="table">
                        <thead>
                        <tr>
                            <th className="col-1">No</th>
                            <th className="col-9">Task Name</th>
                            <th className="col-1">Edit</th>
                            <th className="col-1">Delete</th>
                        </tr>
                        </thead>
                        <tbody>

                        {todoItems.map((item, i) => {
                            return (
                                <tr key={i.toString()}>
                                    <td>{i+1}</td>
                                    <td>{item}</td>
                                    <td>
                                        <button onClick={() => {
                                            TodoEditAlert(i, item)
                                        }} className="btn btn-success">Edit
                                        </button>
                                    </td>
                                    <td>
                                        <button onClick={() => {
                                            TodoDeleteAlert(i)
                                        }} className="btn btn-danger">Delete
                                        </button>
                                    </td>
                                </tr>
                            )
                        })}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default TodoList;