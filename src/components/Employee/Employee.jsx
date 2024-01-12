import { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { getEmployee, addEmployee , updateEmployee } from '../../services/employeeService';
import getErrorResponse from '../../utils/errorUtils'
import FormFieldError from '../FormFieldError/FormFieldError';
import './Employee.css'

function Employee() {

    const defaultEmployee = {first_name: "", last_name: "", email: ""}

    const [employee, setEmployee] = useState(defaultEmployee);
    const [errors, setErrors] = useState(null);

    const navigator = useNavigate();
    const {id} = useParams();

    useEffect(() => {
        if (id) {
            getEmployeeById(id);
        }
    }, [id])

    async function getEmployeeById(id) {
        try {
            const response = await getEmployee(id);
            setEmployee(response.data);
        } catch (error) {
            if (error.response.status === 404) {
                navigator('/employees')
            } else {
                console.error(error);
            }
        }
    }

    function handleTextChange(event) {
        const {name, value} = event.target;

        setEmployee(p => {
            return {
                ...p,
                [name]: value
            };
        })
    }

    async function handleClick() {
        try {
            if (id) {
                await updateEmployee(id, employee);
            } else {
                await addEmployee(employee);
            }
            setErrors(null);
            navigator('/employees');
        } catch (error) {
            setErrors(getErrorResponse(error));
        }
    }

    function setPageHeader() {
        return id ? 'Update Employee' : 'Add Employee'
    }

    return(
        <div className='container'>
            <h1>{setPageHeader()}</h1>
            <div className='employee-card'>
                <form>
                    <div className='input-area'>
                        <label>First Name:</label>
                        <input onChange={handleTextChange} className='text' type='text' placeholder='Enter first name...' name='first_name' value={employee.first_name}></input>
                        <FormFieldError messages={errors?.firstName} />
                    </div>
                    <div className='input-area'>
                        <label>Last Name:</label>
                        <input onChange={handleTextChange} className='text' type='text' placeholder='Enter last name...' name='last_name' value={employee.last_name}></input>
                        <FormFieldError messages={errors?.lastName} />
                    </div>
                    <div className='input-area'>
                        <label>Email:</label>
                        <input onChange={handleTextChange} className='text' type='text' placeholder='Enter email...' name='email' value={employee.email}></input>
                        <FormFieldError messages={errors?.email} />
                    </div>
                    <button type='button' onClick={handleClick}>Save</button>
                </form>
            </div>
        </div>
    );
}

export default Employee;
