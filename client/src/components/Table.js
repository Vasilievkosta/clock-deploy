import React from 'react';


const Table = ({ master, removeMaster }) => {



    return (
        <table className="table">
            <thead>
                <tr>
                    {/* <th>ID</th> */}
                    <th>Name</th>
                    <th>City</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {master.map(item => (
                    <tr key={item.id}>
                        {/* <td>{item.id}</td> */}
                        <td>{item.name}</td>
                        <td>{item.title}</td>
                        <td><button className="auth__btn" onClick={() => removeMaster(item.id)}>Delete</button></td>
                    </tr>
                ))}
            </tbody>
        </table>

    );
};

export default Table;