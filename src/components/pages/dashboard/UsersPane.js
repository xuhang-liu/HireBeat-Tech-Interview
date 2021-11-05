import React, { useState, useEffect } from 'react';
import { fetchUsers, fetchMoreUsers } from '../../../services/AuthService';
import { Button } from '../../../components/shared';
import { format } from 'date-fns';

export const UsersPane = () => {

    const [ users, setUsers ] = useState([]);

    useEffect(() => {
        fetchUsers().then(r => {
            if(r.data.success) {
                setUsers(r.data.data.users);
            }
        })
    }, []);

    return (
        <div className="dashboard-pane">
            <table>
                <thead>
                    <tr>
                        <td>First name</td>
                        <td>Last name</td>
                        <td>E-mail address</td>
                        <td>Created at</td>
                    </tr>
                </thead>
                <tbody>
                    { users && users.map((user, i) => 
                    <tr key={`user-${i}`}>
                        <td>{ user.first_name }</td>
                        <td>{ user.last_name }</td>
                        <td>{ user.email }</td>
                        <td>{ user.created_at}</td>
                    </tr>
                    )}
                </tbody>
            </table>
            <br />
            <a href="#" onClick={() => {
                fetchMoreUsers().then(r => {
                    if(r.data.success) {
                        console.log(r.data.data.users);
                    }
                });
            }}>Load More</a>
        </div>
    );
};

export default UsersPane;