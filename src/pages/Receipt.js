import React from 'react'
import Navbar from '../components/home/Navbar';
import UserSearch from '../components/home/UserSearch';
import Data from '../DataValues/Data';
import MailingList from '../components/home/MailingList';
import Footer from '../components/home/Footer';
const Receipt = () => {
    return (
        <div>
            <Navbar />
            <UserSearch />
            <div className="receipt">
                <div className="container">
                    <div className="card">
                        <div className="card-body">
                            <h5>ORDER DETAILS</h5>
                            <table className="table table-bordered">
                                <thead>
                                    <th>Product</th>
                                    <th>Total</th>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>All Natural Italian-Style Chicken Meatballs </td>
                                        <td>&#8358; 4859</td>
                                    </tr>
                                    <tr>
                                        <td>All Natural Italian-Style Chicken Meatballs </td>
                                        <td>&#8358; 4859</td>
                                    </tr>
                                    <tr>
                                        <td>Shipping </td>
                                        <td>&#8358; 895</td>
                                    </tr>
                                    <tr>
                                        <td>Total </td>
                                        <td>&#8358; 7584</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <MailingList />
            <Footer />
        </div>
    )
}

export default Receipt
