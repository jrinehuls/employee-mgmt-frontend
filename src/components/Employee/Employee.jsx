import { useState } from 'react';
import './Employee.css'
import getErrorResponse from '../../utils/errorUtils'
import FormFieldError from '../FormFieldError/FormFieldError';
import { useNavigate } from "react-router-dom";
import { saveEmployee } from '../../services/employeeService';


function Employee() {

    const defaultEmployee = {first_name: "", last_name: "", email: ""}

    const [employee, setEmployee] = useState(defaultEmployee);
    const [errors, setErrors] = useState(null);

    const navigator = useNavigate();

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
            await saveEmployee(employee);
            setErrors(null);
            navigator('/employees');
        } catch (error) {
            setErrors(getErrorResponse(error));
        }
    }

    return(
        <div className='container'>
            <h1>Add Employee</h1>
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
                    <button type='button' onClick={() => handleClick()}>Save</button>
                </form>
            </div>
        </div>
    );
}

export default Employee;
