import { useState } from 'react';
import Axios from "axios";
import styles from './Employee.module.css'
import getErrorResponse from '../../utils/errorUtils'


function Employee() {

    const defaultEmployee = {first_name: "", last_name: "", email: ""}

    const [employee, setEmployee] = useState(defaultEmployee);
    const [errors, setErrors] = useState(null);

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
        const url = "http://localhost:8080/api/employee"
        try {
            await Axios.post(url, employee, {});
        } catch (error) {
            // console.log(e.response)
            setErrors(getErrorResponse(error))
        }
    }

    return(
        <div className={styles.container}>
            <h1>Add Employee</h1>
            <div className={styles.employeeCard}>
                <form>
                    <div className={styles.inputArea}>
                        <label>First Name:</label>
                        <input onChange={handleTextChange} className={styles.text} type='text' placeholder='Enter first name...' name='first_name' value={employee.first_name}></input>
                        <label>{errors?.firstName}</label>
                    </div>
                    <div className={styles.inputArea}>
                        <label>Last Name:</label>
                        <input onChange={handleTextChange} className={styles.text} type='text' placeholder='Enter last name...' name='last_name' value={employee.last_name}></input>
                        <label>{errors?.lastName}</label>
                    </div>
                    <div className={styles.inputArea}>
                        <label>Email:</label>
                        <input onChange={handleTextChange} className={styles.text} type='text' placeholder='Enter email...' name='email' value={employee.email}></input>
                        <label>{errors?.email}</label>
                    </div>
                    <button type='button' onClick={() => handleClick()}>Save</button>
                </form>
            </div>
        </div>
    );
}

export default Employee;
