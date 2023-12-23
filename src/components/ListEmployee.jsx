
function ListEmployee() {

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
        <div>
            <h1>Employees</h1>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                {employees.map(e => 
                    <tr key={e.id}>
                        <td>{e.id}</td>
                        <td>{e.firstName}</td>
                        <td>{e.lastName}</td>
                        <td>{e.email}</td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
    );
}

export default ListEmployee;