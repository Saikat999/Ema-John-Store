import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
// import useFirebase from '../../hooks/useFirebase';
import './Login.css';

const Login = () => {
    // const {user,signInUsingGoogle} = useFirebase();
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/shop';

    const handleGoogleLogin = () =>{
        signInUsingGoogle()
        .then(result =>{
            history.push(redirect_uri);
        })
    }
    return (
        <div className='login-form'>
            <div>
                <h2>Login</h2>
                <form>
                    <input type="email" name="email" id="" placeholder='Your email' />
                    <br />
                    <input type="password" name="password" id="" />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>New to ema-john? <Link to="/register">Create an account</Link></p>
                <div>--------Or--------</div>
                <br />
                <button className='btn-regular' onClick={handleGoogleLogin}>Sign In With Google</button>
            </div>
        </div>
    );
};

export default Login;