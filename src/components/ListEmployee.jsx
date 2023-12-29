import { useState, useEffect } from "react";
import { getEmployees } from "../services/employeeService";

function ListEmployee() {

    const [employees, setEmployees] = useState([])

    useEffect(() => {
        async function fetchData() {
            const response = await getEmployees();
            setEmployees(response.data)
          }
          fetchData();
    }, [])

    let numRows = 0;

    return (
        <div className="table-container">
            <h1>Employees</h1>
            <table className="employee-table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                {employees.map(e => {
                    numRows++;
                    return (
                        <tr key={e.id} className={numRows % 2 === 0 ? "even" : "odd"}>
                            <td>{e.id}</td>
                            <td>{e.first_name}</td>
                            <td>{e.last_name}</td>
                            <td>{e.email}</td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
        </div>
    );
}

export default ListEmployee;