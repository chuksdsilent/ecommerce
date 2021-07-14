    import React from 'react'
import Navbar from '../components/home/Navbar';
import UserSearch from '../components/home/UserSearch';
import MailingList from '../components/home/MailingList';
import { Footer } from 'antd/lib/layout/layout';
import {Link} from 'react-router-dom';
    
    const Checkout = () => {

        let total = 34.85;
        return (
            <div className="checkout">
                <Navbar />
                <UserSearch />
                {/* <form post="/receipt" method="get"> */}
                <div className="container">
                    <div className="check-out-container">
                        <div className="row">
                            <div className="col-md-8">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="billing-details">
                                            <h4>BILLING DETAILS</h4>
                                            <hr/>
                                            <div className="row mb-4">
                                                <div className="col-md-6">
                                                    <label htmlFor="">First Name</label><input type="text" className="form-control"/>
                                                </div>
                                                <div className="col-md-6">
                                                    <label htmlFor="">Last Name</label><input type="text" className="form-control"/>
                                                </div>
                                            </div>
                                            <div className="row mb-4">
                                                <div className="col-md-12">
                                                    <label htmlFor="">Phone</label><input type="text" className="form-control"/>
                                                </div>
                                            </div>
                                            <div className="row mb-4">
                                                <div className="col-md-12">
                                                    <label htmlFor="">Address</label>
                                                    <textarea name="" id="" cols="30" rows="10" className="form-control"></textarea>
                                                </div>
                                            </div>
                                            <div className="row mb-4">
                                                <div className="col-md-12">
                                                    <label htmlFor="">Facebook Link</label><input type="text" className="form-control"/>
                                                </div>
                                            </div>
                                            <div className="row mb-4">
                                                <div className="col-md-12">
                                                    <label htmlFor="">Instagram Link</label><input type="text" className="form-control"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="your-order">
                                    <h6>YOUR ORDER</h6>
                                    <hr />
                                    <div className="d-flex justify-content-between space">
                                        <div>Product</div>
                                        <div>Subtotal</div>
                                    </div>
                                    <div className="d-flex justify-content-between space">
                                        <div style={{width: "60%"}}>All Natural Italian-Style Chicken Meatballs * 5</div>
                                        <div>$4000</div>
                                    </div>                                    
                                    <div className="d-flex justify-content-between space">
                                        <div style={{width: "60%"}}>Angie's Boomchickapop Sweet & Salty Kettle Corn  × 4</div>
                                        <div>$4000</div>
                                    </div>                                    
                                    <div className="d-flex justify-content-between space">
                                        <div>Subtotal</div>
                                        <div>$8500</div>
                                    </div>                                    
                                    <div className="d-flex justify-content-between space">
                                        <div>Delivery</div>
                                        <div>
                                        <div className="d-flex justify-content-end">
                                            <div className="delivery">Within Lagos (Free)</div>
                                                <div>
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                                        <label class="form-check-label" for="flexRadioDefault1">
                                                        
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d-flex">
                                                <div className="delivery">
                                                    Outside Lagos (3500)
                                                </div>
                                                <div class="form-check">
                                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                                        <label class="form-check-label" for="flexRadioDefault1">
                                                        
                                                        </label>
                                                    </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <hr/>      
                                                                        
                                    <div className="d-flex justify-content-between space">
                                        <div>
                                            <h6 style={{marginTop: ".5em", fontSize: "1.2em"}}>Total</h6>
                                        </div>
                                        <div style={{fontSize: "1.5em", fontWeight: "bolder"}}> &#8358; {total}</div>
                                    </div>          
                                    <hr/> 
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                        <label class="form-check-label" for="flexRadioDefault1">
                                            Direct Transfer
                                        </label>
                                    </div>         
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                        <label class="form-check-label" for="flexRadioDefault1">
                                            Flutterwave
                                        </label>
                                    </div>         
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                        <label class="form-check-label" for="flexRadioDefault1">
                                            Cash on Delivery
                                        </label>
                                    </div>   
                                    <hr />      
                                    <Link to='/receipt' 
                                    className="btn"
                                     style={{ fontWeight:"bold", background: "#c53636", color: "white", width: "100%", paddingTop: ".8em", paddingBottom: ".8em"}} 
                                     >
                                        Place Order
                                    </Link>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* </form> */}
                <MailingList />
                <Footer />
            </div>
        )
    }
    
    export default Checkout
    