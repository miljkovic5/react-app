import React, { useState } from 'react';
import Header from './components/Header/Header';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import AccountsTable from './components/AccountsTable/AccountsTable';
import AddAccount from './components/AddAccount/AddAccount';
import EditTable from './components/EditTable/EditTable';
import EditAccount from './components/EditAccount/EditAccount';

function App() {
    const [accounts, setAccounts] = useState([
        {
            id: 1,
            name: 'Danilo',
            lastname: 'Vesovic',
            phone: '11-11-11-11',
            email: 'danilo@gmail.com',
        },
        {
            id: 2,
            name: 'Danilo',
            lastname: 'Vesovic',
            phone: '11-11-11-11',
            email: 'vlada@gmail.com',
        },
    ]);

    const addNewAccountToState = acc => {
        setAccounts([...accounts, acc]);
    };

    const deleteAccount = id => {
        const newCopyAccounts = accounts.filter(account => account.id !== id);
        setAccounts(newCopyAccounts);
    };

    const editAccount = acc => {
        let accountPostion = accounts
            .map(account => account.id)
            .indexOf(acc.id);
        accounts[accountPostion] = acc;
        setAccounts(accounts);
    };

    return (
        <BrowserRouter>
            <Header />;
            <Route path='/' exact>
                <AccountsTable accounts={accounts} />
            </Route>
            <Route path='/add'>
                <AddAccount addNewAccountToState={addNewAccountToState} />
            </Route>
            <Switch>
                <Route path='/edit/:id'>
                    <EditAccount
                        accounts={accounts}
                        editAccount={editAccount}
                    />
                </Route>
                <Route path='/edit'>
                    <EditTable
                        accounts={accounts}
                        deleteAccount={deleteAccount}
                        editAccount={editAccount}
                    />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
