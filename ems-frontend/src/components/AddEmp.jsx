import React, { useState } from 'react'
import { addEmployee } from '../services/EmployeeService';
import { useNavigate } from 'react-router-dom';

const AddEmp = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState(false);

    const navigate = useNavigate();

    const saveEmployee = (e) => {
        e.preventDefault();

        if(firstName.length == 0 || lastName.length == 0 || email.length == 0) {
            setError(true);
            return;
        }

        const employee = { firstName, lastName, email};
        console.warn(employee);

        addEmployee(employee).then((response) => {
            console.warn(response.data);
            navigate('/');
        })
    }

    return (
        <div>
            <h1 className='mb-16'>Add New Employee</h1>
            <div className='border-2 rounded-lg bg-zinc-900 border-zinc-950 p-5 w-96 m-auto'>
                <div className='flex justify-around mb-8'>
                    <p>First Name</p>
                    <input value={firstName} onChange={(e) => setFirstName(e.target.value)} type='text' className='border-2 border-blue-400 rounded-lg'></input>
                </div>
                <div className='flex justify-around mb-8'>
                    <p>Last Name</p>
                    <input value={lastName} onChange={(e) => setLastName(e.target.value)} type='text' className='border-2 border-blue-400 rounded-lg'></input>
                </div>
                <div className='flex justify-around mb-8'>
                    <p>Email</p>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type='text' className='border-2 border-blue-400 rounded-lg'></input>
                </div>
                <button className='' onClick={saveEmployee}>Submit</button>
                {error && <p className='text-red-500'>All fields must be filled</p>}
            </div>
        </div>
    )
}

export default AddEmp
