import React from 'react';
import Account from '../Account/Account';

const AccountsTable = ({ accounts }) => {
    const allAccounts = accounts.map(el => (
        <Account account={el} key={el.id} />
    ));
    return (
        <div className='container'>
            <div className='row'>
                <div className='mx-auto col-10'>
                    <h3 className='display-4 m-4'>Accounts</h3>
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

export default AccountsTable;
