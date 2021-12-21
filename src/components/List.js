import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteEmployeeAsync } from '../actions/actionEmployees';


export const List = () => {

    const dispatch = useDispatch();

    const { employees } = useSelector(store => store.employee);
    console.log(employees)

    return (
        <div>
            <table className="table text-center mt-3">

                <thead>
                    <tr>
                        <th scope="col">Image</th>
                        <th scope="col">Username</th>
                        <th scope="col">Email</th>
                        <th scope="col">Description</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employees.map((emp , index) => (
                            <tr key={index}>
                                <td><img src={emp.url} width="50"/></td>
                                <td>{emp.descripcion}</td>
                                <td>{emp.nombre}</td>
                                <td>{emp.correo}</td>
                                <input
                                    value="Delete"
                                    type="button"
                                    className="btn btn-outline-dark"
                                    onClick={() => dispatch(deleteEmployeeAsync(emp.correo))}
                                />
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
