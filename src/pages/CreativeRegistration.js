import React, { useState } from 'react'
import Navbar from '../components/home/Navbar';
import UserSearch from '../components/home/UserSearch';
import MailingList from '../components/home/MailingList';
import {ToastContainer, toast} from 'react-toastify';
import { auth } from '../firebase'

const CreativeRegistration = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [facebook, setFacebook] = useState("");
    const [instagram, setInstagram] = useState("");
    const [accountNumber, setAccountNumber] = useState("");
    const [accountName, setAccountName] = useState("");
    const [bank, setBank] = useState("");
    const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
        e.preventDefault();
        const config = {
            url: process.env.REACT_APP_REGISTER_REDIRECT_URL,
            handleCodeInApp: true,
          };

          
    await auth.sendSignInLinkToEmail(email, config);
    
    // save user email in local storage
    window.localStorage.setItem("emailForRegistration", email);
    toast.success(
        `Email is sent to ${email}. Click the link to complete your registration.`
      );

    // clear state
    setEmail("");
  };

    return (
        <div>
            <Navbar />
            <UserSearch />
            <div className="creative">
                <div className="container">
                    <div className="card">
                        <div className="card-body">
                            <h5>Sign up for Creative</h5>
                            <hr />
                            <ToastContainer />
                            
                            <form  onSubmit={handleSubmit}>
                            
                                <div className="row mb-4">
                                    <div className="col-md-12">
                                        <label htmlFor="">Email</label>
                                        <input 
                                        onChange={(e) => setEmail(e.target.value)}
                                        value={email}
                                        type="text" className="form-control"/>
                                    </div>
                                </div>
                                <div><button type="submit" className="form-control btn btn-danger">Sign Up </button></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <MailingList />
        </div>
    )
}

export default CreativeRegistration
