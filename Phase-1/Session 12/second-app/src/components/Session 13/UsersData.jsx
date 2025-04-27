import React, { useEffect, useState } from "react";
import axios from "axios";

function UsersData() {
    const [users, setUsers] = useState(null);

    useEffect(() => {
        // fetch('https://jsonplaceholder.typicode.com/users')
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data);
        //         setUsers(data);
        //     })
        //     .catch(err => {
        //         console.error("Error fetching data:", err)
        //     })
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                setUsers(res.data)
                console.log(res.data);
            })
            .catch(err => {
                console.log("Error in fetching data:", err)
            })
    }, []);

    return (<table className="table table-striped table-hover table-bordered">
        <thead className="table-dark text-center">
            <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Username</th>
                <th scope="col">Email</th>
                <th scope="col">City</th>
            </tr>
        </thead>
        <tbody className="table-group-divider">
            {users ?

                users.map((user) => {
                    return (
                        <tr key={user.id}>
                            <th scope="row">{user.id}</th>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.address.city}</td>
                        </tr>
                    )
                }
                ) : <div className="d-flex justify-content-center">
                    <div className="spinner-border text-warning" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>}

        </tbody>
    </table>)
}
export default UsersData;