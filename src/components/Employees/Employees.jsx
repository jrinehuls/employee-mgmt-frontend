import { useState, useEffect } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import styles from './Employees.module.css';


function Employees() {
    let numRows = 0;
    const [employees, setEmployees] = useState([]);

    const navigator = useNavigate();

    useEffect(() => {
        async function fetchData() {
            const url = "http://localhost:8080/api/employee"
            const response = await Axios.get(url + "/all");
            setEmployees(response.data)
          }
          fetchData();
    }, [])

    function addEmployee() {
        navigator('/add-employee');
    }

    return (
        <div className={styles.tableContainer}>
            <div className={styles.buttonContainer}>
                <h1>Employees:</h1>
                <button className={styles.addEmpBtn} onClick={addEmployee}>Add Employee</button>
            </div>
            <table className={styles.employeeTable}>
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
                        <tr key={e.id} className={numRows % 2 === 0 ? styles.even : styles.odd}>
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
