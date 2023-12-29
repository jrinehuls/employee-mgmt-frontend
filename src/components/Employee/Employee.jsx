import { useState } from 'react';
import styles from './Employee.module.css'
import { saveEmployee } from '../../services/employeeService';


function Employee() {

    const defaultEmployee = {first_name: "", last_name: "", email: ""}

    const [employee, setEmployee] = useState(defaultEmployee);

    function handleTextChange(event) {
        const {name, value} = event.target;

        setEmployee(p => {
            return {
                ...p,
                [name]: value
            }
        })
    }

    async function handleClick() {
        await saveEmployee(employee)
    }

    return(
        <div className={styles.container}>
            <h1>Add Employee</h1>
            <div className={styles.employee}>
                <form>
                    <input onChange={handleTextChange} className={styles.text} type='text' placeholder='Enter first name...' name='first_name' value={employee.first_name}></input>
                    <input onChange={handleTextChange} className={styles.text} type='text' placeholder='Enter last name...' name='last_name' value={employee.last_name}></input>
                    <input onChange={handleTextChange} className={styles.text} type='text' placeholder='Enter email...' name='email' value={employee.email}></input>
                    <button type='button' onClick={handleClick}>Save</button>
                </form>
            </div>
        </div>
    );
}

export default Employee;
