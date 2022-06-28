import React, { useState, useEffect, useRef } from 'react';
import { withRouter } from 'react-router-dom';

function AddAccount(props) {
    const [newAccount, setNewAccount] = useState({
        id: '',
        name: '',
        lastname: '',
        phone: '',
        email: '',
    });

    const idInput = useRef();

    useEffect(() => {
        idInput.current.focus();
    }, []);

    const addNewAccount = () => {
        props.addNewAccountToState(newAccount);
        props.history.push('/');
    };

    return (
        <div className='container'>
            <div className='row'>
                <div className='mx-auto col-10'>
                    <h3 className='display-4 m-4'>Add Accounts</h3>
                    <div className='row'>
                        <div className='mx-auto col-10'>
                            <input
                                type='text'
                                placeholder='id'
                                className='form-control'
                                ref={idInput}
                                onChange={e =>
                                    setNewAccount({
                                        ...newAccount,
                                        id: e.target.value,
                                    })
                                }
                            />{' '}
                            <br />
                            <input
                                type='text'
                                placeholder='name'
                                className='form-control'
                                onChange={e =>
                                    setNewAccount({
                                        ...newAccount,
                                        name: e.target.value,
                                    })
                                }
                            />{' '}
                            <br />
                            <input
                                type='text'
                                placeholder='lastname'
                                className='form-control'
                                onChange={e =>
                                    setNewAccount({
                                        ...newAccount,
                                        lastname: e.target.value,
                                    })
                                }
                            />{' '}
                            <br />
                            <input
                                type='text'
                                placeholder='phone'
                                className='form-control'
                                onChange={e =>
                                    setNewAccount({
                                        ...newAccount,
                                        phone: e.target.value,
                                    })
                                }
                            />{' '}
                            <br />
                            <input
                                type='email'
                                placeholder='email'
                                className='form-control'
                                onChange={e =>
                                    setNewAccount({
                                        ...newAccount,
                                        email: e.target.value,
                                    })
                                }
                            />
                            <br />
                            <button
                                onClick={addNewAccount}
                                className='btn btn-primary form-control'
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default withRouter(AddAccount);
