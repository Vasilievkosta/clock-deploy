import React from 'react';


const TableUser = ({ user, removeUser }) => {

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Date</th>
                    <th>City</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {user.map(item => (
                    <tr key={item.id}>
                        {/* <td>{item.id}</td> */}
                        <td>{item.username}</td>
                        <td>{item.email}</td>
                        <td>{item.time}</td>
                        <td>{item.title}</td>
                        <td><button className="auth__btn" onClick={() => removeUser(item.id)}>Delete</button></td>
                    </tr>
                ))}
            </tbody>
        </table>

    );
};

export default TableUser;