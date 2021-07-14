import React from 'react'
import Navbar from '../components/home/Navbar';
import UserSearch from '../components/home/UserSearch';
import ProductInfo from '../components/Product/ProductInfo';

const Product = () => {
    return (
        <div className="product">
            <Navbar />
            <UserSearch />
            <div className="container">
                <ProductInfo />
            </div>
        </div>
    )
}

export default Product
