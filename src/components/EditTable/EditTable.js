import React from 'react';
import Account from '../Account/Account';

const EditTable = ({ accounts, deleteAccount, editAccount }) => {
    const allAccounts = accounts.map(account => (
        <Account
            account={account}
            key={account.id}
            edit={true}
            deleteAccount={deleteAccount}
        />
    ));
    return (
        <div className='container'>
            <div className='row'>
                <div className='mx-auto col-10'>
                    <h3 className='display-4 m-4'>Edit / Delete</h3>
                    <div className='row'>
                        <div className='mx-auto col-10'>
                            <table className='table'>
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Name</th>
                                        <th>Lastname</th>
                                        <th>Phone</th>
                                        <th>Email</th>
                                        <th>Edit</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>{allAccounts}</tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditTable;
