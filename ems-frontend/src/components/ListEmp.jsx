import React, { useEffect, useState } from 'react'
import { listEmployees } from '../services/EmployeeService'

const ListEmp = () => {

    const [employees, setEmployees] = useState([])

    useEffect(() => {
        listEmployees().then((response) => {
            setEmployees(response.data);
        }).catch(error => {
            console.error(error);
        })
    }, [])

    return (
        <div>
            <h1 className='p-6'>Employee List</h1>
            <table className="min-w-full border-collapse border border-gray-300 shadow-md rounded-lg overflow-hidden">
                <thead className="bg-gray-800 text-white">
                    <tr>
                        <th className="px-6 py-3 text-center text-sm font-semibold uppercase tracking-wider">Id</th>
                        <th className="px-6 py-3 text-center text-sm font-semibold uppercase tracking-wider">First Name</th>
                        <th className="px-6 py-3 text-center text-sm font-semibold uppercase tracking-wider">Last Name</th>
                        <th className="px-6 py-3 text-center text-sm font-semibold uppercase tracking-wider">Email</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {employees.map((employee) => (
                        <tr key={employee.id} className="hover:bg-gray-100 transition-colors">
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{employee.id}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{employee.firstName}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{employee.lastName}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{employee.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    )
}

export default ListEmp
