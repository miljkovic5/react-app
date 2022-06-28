import React from 'react';
import { Link } from 'react-router-dom';

const Account = ({ account, edit, deleteAccount }) => {
    const actionButtons = edit && (
        <>
            <th>
                <button
                    onClick={() => deleteAccount(account.id)}
                    className='btn btn-danger'
                >
                    Delete
                </button>
            </th>
            <th>
                <Link to={`/edit/${account.id}`} className='btn btn-warning'>
                    Edit
                </Link>
            </th>
        </>
    );

    return (
        <tr>
            <td>{account.id}</td>
            <td>{account.name}</td>
            <td>{account.lastname}</td>
            <td>{account.phone}</td>
            <td>{account.email}</td>
            {actionButtons}
        </tr>
    );
};

export default Account;
