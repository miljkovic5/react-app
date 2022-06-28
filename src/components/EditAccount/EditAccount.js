import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

function EditAccount(props) {
    const [account, setAccount] = useState(
        props.accounts.find(acc => acc.id == props.match.params.id)
    );

    const editAccout = () => {
        props.editAccount(account);
        props.history.push('/');
    };

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-10 mx-auto'>
                    <div className='row'>
                        <div className='col-10 mx-auto'>
                            <input
                                type='text'
                                id='name'
                                className='form-control'
                                value={account.name}
                                onChange={e =>
                                    setAccount({
                                        ...account,
                                        name: e.target.value,
                                    })
                                }
                            />
                            <br />
                            <input
                                type='text'
                                id='lastname'
                                className='form-control'
                                value={account.lastname}
                                onChange={e =>
                                    setAccount({
                                        ...account,
                                        lastname: e.target.value,
                                    })
                                }
                            />
                            <br />
                            <input
                                type='text'
                                id='phone'
                                className='form-control'
                                value={account.phone}
                                onChange={e =>
                                    setAccount({
                                        ...account,
                                        phone: e.target.value,
                                    })
                                }
                            />
                            <br />
                            <input
                                type='text'
                                id='email'
                                className='form-control'
                                value={account.email}
                                onChange={e =>
                                    setAccount({
                                        ...account,
                                        email: e.target.value,
                                    })
                                }
                            />
                            <br />
                            <button
                                onClick={editAccout}
                                className='btn btn-info form-control'
                            >
                                Edit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default withRouter(EditAccount);
