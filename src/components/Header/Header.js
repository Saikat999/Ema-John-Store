import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
// import useFirebase from '../../hooks/useFirebase';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    const history = useHistory();
    // const handleClick=()=>{
    //     history.push('/');
    // }

    // const {user,logOut} = useFirebase();
    const {user, logOut} = useAuth();
    return (
        <div className='header'>
            <img onClick={()=> history.push('/')} className='logo' src={logo} alt="logo" />
            <nav>
                <Link to="/shop">Shop</Link>
                <Link to="/review">Order Review</Link>
                <Link to="/inventory">Manage Inventory</Link>
                <span style={{color:'white'}}>{user.displayName} </span>
                { user.email ? 
                  <button onClick={logOut}>Logout</button>
                  :
                  <Link to="/login">Login</Link>}
           
            </nav>
        </div>
    );
};

export default Header;