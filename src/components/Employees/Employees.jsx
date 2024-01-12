import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './Employees.css';
import { getEmployees } from "../../services/employeeService";


function Employees() {
    let numRows = 0;
    const [employees, setEmployees] = useState([]);

    const navigator = useNavigate();

    useEffect(() => {
        async function fetchData() {
            const response = await getEmployees();
            setEmployees(response.data);
          }
          fetchData();
    }, [])

    function addEmployee() {
        navigator('/add-employee');
    }

    return (
        <div className='table-container'>
            <div className='button-container'>
                <h1>Employees:</h1>
                <button className='add-emp-btn' onClick={addEmployee}>Add Employee</button>
            </div>
            <table className='employee-table'>
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
                        <tr key={e.id} className={numRows % 2 === 0 ? 'even' : 'odd'}>
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

export default Employees;
