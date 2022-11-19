import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

const Register = () => {
    return (
        <div className='register-form'>
            <div>
                <h2>Create Account</h2>
                <form>
                    <input type="email" name="email" id="" placeholder='Enter your email' />
                    <br />
                    <input type="password" name="password" id="" placeholder='Enter a password' />
                    <br />
                    <input type="password" name="password" id="" placeholder='Re-enter your password' />
                    <br />
                    <input type="submit" value="Register" />
                </form>
                <p>Already have an account? <Link to="/login">Sign In</Link></p>
            </div>
        </div>
    );
};

export default Register;