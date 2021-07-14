import React from 'react'
import Navbar from '../components/home/Navbar';
import UserSearch from '../components/home/UserSearch';
import {Link} from 'react-router-dom'
import Footer from '../components/home/Footer';
import MailingList from '../components/home/MailingList';
const Cart = () => {

    let subtotal = 34;
    return (
        <div className="cart">
            <Navbar />
            <UserSearch />
            <div className="container">
                <div className="content">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="table">
                                <table className="table">
                                    <th>1 </th>
                                    <th>Product</th>
                                    <th>Cloth</th>
                                    <th>Clothe Size</th>
                                    <th>Price</th>
                                    <th>Qty</th>
                                    <th>Subtotal</th>
                                    <tr>
                                        <td>#</td>
                                        <td>Product</td>
                                        <td>Cloth</td>
                                        <td>Clothe Size</td>
                                        <td>Price</td>
                                        <td>Qty</td>
                                        <td>Subtotal</td>
                                    </tr>
                                    <tr>
                                        <td>#</td>
                                        <td>Product</td>
                                        <td>Cloth</td>
                                        <td>Clothe Size</td>
                                        <td>Price</td>
                                        <td>Qty</td>
                                        <td>Subtotal</td>
                                    </tr>
                                </table>
                            </div>   
                            <hr/>     
                            <div className="d-flex justify-content-end">
                                <button className="btn btn-primary">Update Cart</button>
                            </div>        
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-body">
                                    <h6>CART TOTALS</h6>
                                    <hr/>
                                    <div className="d-flex justify-content-between">
                                        <div><h6>Subtotal</h6></div>
                                        <div>${subtotal}</div>
                                    </div>
                                    <hr/>
                                    <div className="d-flex justify-content-between">
                                        <div>
                                            <h6>Delivery Fee</h6>
                                        </div>
                                        <div>
                                            <div className="d-flex">
                                                <div style={{marginRight: ".5em"}}>Within Lagos (Free)</div>
                                                <div>
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                                        <label class="form-check-label" for="flexRadioDefault1">
                                                        
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d-flex">
                                                <div style={{marginRight: ".5em"}}>Outside Lagos (3500)</div>
                                                <div>
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                                        <label class="form-check-label" for="flexRadioDefault1">
                                                        
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <hr/>
                                    <div className="total">
                                        <div className="d-flex justify-content-between">
                                            <div>
                                                <h6 style={{marginTop: ".7em", fontSize: "1.3em"}}>TOTAL</h6>
                                            </div>
                                            <div style={{fontSize: "2em", color: "red"}}>
                                                $7500
                                            </div>
                                        </div>
                                    </div>
                                    <hr/>
                                    <Link to='/checkout' 
                                    className="btn"
                                     style={{ fontWeight:"bold", background: "#c53636", color: "white", width: "100%", paddingTop: ".8em", paddingBottom: ".8em"}} 
                                     >
                                        Proceed to Checkout
                                    </Link>
                                    <div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <MailingList />                
                <Footer />
        </div>
    )
}

export default Cart
