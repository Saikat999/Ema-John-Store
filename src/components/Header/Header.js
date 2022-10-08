import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    const history = useHistory();
    // const handleClick=()=>{
    //     history.push('/');
    // }
    return (
        <div className='header'>
            <img onClick={()=> history.push('/')} className='logo' src={logo} alt="logo" />
            <nav>
                <Link to="/shop">Shop</Link>
                <Link to="/review">Order Review</Link>
                <Link to="/inventory">Manage Inventory</Link>
                Order Review
            </nav>
        </div>
    );
};

export default Header;