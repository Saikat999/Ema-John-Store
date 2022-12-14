import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import 'react-toastify/dist/ReactToastify.css';
import './Product.css'
import Rating from 'react-rating';

const Product = (props) => {
    // console.log(props);
    const {name, img, price,stock, seller,star} =props.product;
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
    
    return (
        <div className='product'>
            <div>
                <img src={img} alt="Product" />
            </div>
            <div className='product-details'>
                <h4 className='product-name'>{name}</h4>
                <p><small>by: {seller}</small></p>
                <p>Price: {price}</p>
                <p><small>only {stock} left in stock - order soon</small></p>
                <Rating 
                 initialRating={star}
                emptySymbol="far fa-star icon-color"
                fullSymbol="fas fa-star icon-color"
                readonly>
                </Rating><br/>
                <button onClick={()=>props.handleAddToCart(props.product)} className='btn-regular'>{cartIcon} add to cart</button>
            </div>
        </div>
    );
};

export default Product;