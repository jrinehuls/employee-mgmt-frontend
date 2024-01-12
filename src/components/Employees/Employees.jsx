import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getEmployees, deleteEmployee } from "../../services/employeeService";
import './Employees.css';


function Employees() {
    let numRows = 0;
    const [employees, setEmployees] = useState([]);
    const [refresh, setRefresh] = useState(false);

    const navigator = useNavigate();

    useEffect(() => {
        getAllEmployees();
    }, [refresh])

    async function getAllEmployees() {
        try {
            const response = await getEmployees();
            setEmployees(response.data);
        } catch (error) {
            console.error(error)
        }
    }

    function onAddEmployee() {
        navigator('/add-employee');
    }

    function onGetEmployee(id) {
        navigator(`/employee/${id}`);
    }

    async function onDeleteEmployee(id) {
        try {
            const response = await deleteEmployee(id);
            if (response.status === 204) {
                setRefresh(!refresh);
            }
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className='table-container'>
            <div className='button-container'>
                <h1>Employees:</h1>
                <button className='add-emp-btn' onClick={onAddEmployee}>Add Employee</button>
            </div>
            <table className='employee-table'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Actions</th>
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
                            <td>
                                <div className='action-button'>
                                    <button className='update-button' onClick={() => onGetEmployee(e.id)}>Update</button>
                                    <button className='delete-button' onClick={() => onDeleteEmployee(e.id)}>Delete</button>
                                </div>
                            </td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
        </div>
    );
}

export default Employees;
