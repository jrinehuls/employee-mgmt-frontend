import { useState } from "react";

function ListEmployee() {

    let numRows = 0; 

    const employees = [
        {
            id: 1,
            firstName: "Justin",
            lastName: "Rinehuls",
            email: "jrinehuls@gmail.com"
        },
        {
            id: 2,
            firstName: "Jennifer",
            lastName: "Getz",
            email: "jcgetz84@gmail.com"
        },
        {
            id: 3,
            firstName: "Patty",
            lastName: "Dirl",
            email: "prettydirl@gmail.com"
        },
    ]

    return(
        <div className="container">
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
                    return <tr key={e.id} className={numRows % 2 === 0 ? "even" : "odd"}>
                        <td>{e.id}</td>
                        <td>{e.firstName}</td>
                        <td>{e.lastName}</td>
                        <td>{e.email}</td>
                    </tr>
                }
                )}
                </tbody>
            </table>
        </div>
    );
}

export default ListEmployee;