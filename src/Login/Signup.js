import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import './AuthPage.css'
const Signup = () => {
    const navigate = useNavigate();
    const goto = () => navigate('/login');
    return (
        <div className='authpage'>
            <div className='authcont'>
                <img src='https://images.unsplash.com/photo-1495480137269-ff29bd0a695c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80'
                    alt='signup' />
                <form className='authform'>
                    <h1>Signup</h1>
                    <div className='form-group-row'>
                        <div className='formgroup'>
                            <label htmlFor='fname'>First Name</label>
                            <input type='text' id='fname' />
                        </div>
                        <div className='formgroup'>
                            <label htmlFor='lname'>Last Name</label>
                            <input type='text' id='lname' />
                        </div>
                    </div>
                    <div className='formgroup'>
                        <label htmlFor='email'>Email</label>
                        <input type='email' id='email' />
                    </div>

                    <div className='form-group-row'>
                        <div className='formgroup'>
                            <label htmlFor='password'>Password</label>
                            <input type='password' id='password' />
                        </div>
                        <div className='formgroup'>
                        <label htmlFor='cpassword'>Confirm Password</label>
                        <input type='password' id='cpassword' />
                    </div>
                    </div>

                    <Link to='/login'
                        className='stylenone'
                    >
                        <p>Already have an account?</p>
                    </Link>
                        <button className='btn' onClick={goto} >Sign in</button>

                </form>
            </div>
        </div>
    )
}

export default Signup