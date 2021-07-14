import React, { useState, useEffect, useContext } from 'react'
import Navbar from '../components/home/Navbar';
import UserSearch from '../components/home/UserSearch';
import MailingList from '../components/home/MailingList';
import {ToastContainer, toast} from 'react-toastify';
import { auth } from '../firebase'
import creativeContext from '../context/creatives/CreativeContext';


const RegisterComplete = ({history}) => {
    const creativeCotext = useContext(creativeContext)

    const { creatives } = creativeCotext;
    
    console.log(creatives)

    const [user, setUser] = useState({
        "firstName": "",
        "lastName": "",
        "email": "",
        "phone": "",
        "facebook": "",
        "instagram": "",
        "accountNumber": "",
        "accountName": "",
        "bank": "",
        "password": ""
    });
    
    const { firstName, lastName, email, phone, facebook, instagram, accountNumber, accountName, bank, password } = user;
   
    const [Loading, setLoading] = useState(false);

    useEffect(() => {
        // setEmail(window.localStorage.getItem("emailForRegistration"));
    },[])

    const onChange = (e) => {
        setUser ({ ...user, [e.target.name]: e.target.value})
    }
  const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        

        console.log(user);
        // console.log(currentUser)
       
        try {
            

            setUser({
                "firstName": "",
                "lastName": "",
                "email": "",
                "phone": "",
                "facebook": "",
                "instagram": "",
                "accountNumber": "",
                "accountName": "",
                "bank": "",
                "password": ""
            })

        } catch (error) {
            setLoading(false);        
        console.log(error);
        toast.error(error.message);
        }
      
       setUser({ "password": ""});
        setLoading(false);
    };
   
    return (
        <div>
            <Navbar />
            <UserSearch />
            <div className="creative">
                <div className="container">
                    <div className="card">
                        <div className="card-body">
                         
                         {
                             creatives.map(creative => {
                                 return (
                                    <ul key={creative.id}>
                                        <li>{creative.firstName}</li>
                                    </ul>
                                 )
                             })
                         }                      

                            <h5>Register as a Creative</h5>
                            <hr />
                            <ToastContainer />
                            <form  onSubmit={handleSubmit}>
                                <div className="row mb-4">
                                    <div className="col-md-6">
                                        <label htmlFor="">First Name</label>
                                        <input 
                                        onChange={onChange}
                                        value={firstName}
                                        type="text" className="form-control"/>
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="">Last Name</label>
                                        <input 
                                        onChange={onChange}
                                        value={lastName}
                                        type="text" className="form-control"/>
                                    </div>
                                </div>
                               
                                <div className="row mb-4">
                                    <div className="col-md-12">
                                        <label htmlFor="">Phone</label>
                                        <input 
                                        onChange={onChange}
                                        value={phone}
                                        type="text" className="form-control"/>
                                    </div>
                                </div>
                                <div className="row mb-4">
                                    <div className="col-md-12">
                                        <label htmlFor="">Email</label>
                                        <input 
                                        value={email}
                                        onChange = {onChange}
                                        type="text" className="form-control"/>
                                    </div>
                                </div>
                                <div className="row mb-4">
                                    <div className="col-md-12">
                                        <label htmlFor="">Password</label>
                                        <input 
                                        onChange={onChange}
                                        value={password}
                                        type="password" className="form-control"/>
                                    </div>
                                </div>
                                <div className="row mb-4">
                                    <div className="col-md-12">
                                        <label htmlFor="">Facebook Link</label>
                                        <input 
                                        onChange={onChange}
                                        value={facebook}
                                        type="text" className="form-control"/>
                                    </div>
                                </div>
                                <div className="row mb-4">
                                    <div className="col-md-12">
                                        <label htmlFor="">Instagram Link</label>
                                        <input 
                                        onChange={onChange}
                                        value={instagram}
                                        type="text" className="form-control"/>
                                    </div>
                                </div>
                                <div className="row mb-4">
                                    <div className="col-md-6">
                                        <label htmlFor="">Account Number</label>
                                        <input 
                                        onChange={onChange}
                                        value={accountNumber}
                                        type="text" className="form-control"/>
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="">Account Name</label>
                                        <input 
                                        onChange={onChange}
                                        value={accountName}
                                        type="text" className="form-control"/>
                                    </div>
                                </div>
                                <div className="row mb-4">
                                    <div className="col-md-12">
                                        <label htmlFor="">Bank</label>
                                        <input 
                                        onChange={onChange}
                                        value={bank}
                                        type="text" className="form-control"/>
                                    </div>
                                </div>
                                <div><button type="submit" className="form-control btn btn-danger">{(Loading) ? "Loading..." : "Sign up"}</button></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <MailingList />
        </div>
    )
}

export default RegisterComplete
