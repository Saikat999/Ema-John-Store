import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import InfiniteScroll from "react-infinite-scroll-component";

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] =useState([]);
    const [displayProducts, setDisplayProducts] = useState([]);
    const [limit, setLimit] = useState(5);
    const [hasMore, setHasMore] = useState(true)

    // console.log('limit',limit)
    useEffect(()=>{
        fetch('./products.JSON')

        .then(res => res.json())
        .then(data => {
            setProducts(data);
            // setDisplayProducts(...displayProducts, data.slice(0,{limit}));
            setDisplayProducts(data);
        })
        // setLimit(limit+5);

    },[]);

    useEffect(() => {
       if(products.length){
        const saveCart = getStoredCart();
        const storedCart = [];
        for(const key in saveCart){
            const addedProduct = products.find((product => product.key === key));
            if(addedProduct){
                const quantity = saveCart[key];
                addedProduct.quantity=quantity;
                storedCart.push(addedProduct);
            }
           
        }
        setCart(storedCart);
       }
    }, [products])

    const handleAddToCart=(product)=>{
        const exists = cart.find(pd => pd.key === product.key);
        let newCart = [];
        if(exists){
         const rest = cart.filter(pd => pd.key !== product.key);
         exists.quantity = exists.quantity + 1;
         newCart = [...rest, product];
        }else{
            product.quantity = 1;
            newCart = [...cart, product];
        }
        setCart(newCart);
        //save to local storage
        addToDb(product.key);
        notify();
    }
    const notify = () => toast("Product Added !");
    const handleSearch = event=>{
         const searchText = event.target.value;

         const matchProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
         
         setDisplayProducts(matchProducts);
         
    }

   const fetchMoreData = () => {
    fetch('./products.JSON')
    .then(res => res.json())
    .then(data => {
        setProducts(data);
        setDisplayProducts(data);
    });
    // setLimit(limit+5);

    
    if(displayProducts.length === 0 || displayProducts.length < 5){
      setHasMore(false);
    }
    };


    return (
      <div>
        <div className="search-container">
          <input
            type="text"
            onChange={handleSearch}
            placeholder="Search your product..."
          />
        </div>
        <div className="shop-container">

          <InfiniteScroll
            dataLength={displayProducts.length}
            next={fetchMoreData}
            hasMore={true}
            loader={<h4>Loading...</h4>}
            height={400}
            endMessage={
              <p style={{ textAlign: "center" }}>
                <b>Yay! You have seen all the product !!!</b>
              </p>
            }
          >

          <div className="product-container">
            {displayProducts.map((product) => (
              <Product
                key={product.key}
                product={product}
                handleAddToCart={handleAddToCart}
              ></Product>
            ))} 
          </div>
        </InfiniteScroll>
          <div className="cart-container">
            <Cart cart={cart}>
              <Link to="/review">
                <button className="btn-regular">Review Your Order</button>
              </Link>
            </Cart>
            <ToastContainer
             />
          </div>
        </div>
      </div>
    );
};

export default Shop;