import React from 'react'
import Navbar from '../components/home/Navbar';
import aboutus from '../images/aboutus.jpg';
import aboutsideimage from '../images/aboutsideimage.jpg';
import '../css/about.css'
import UserSearch from '../components/home/UserSearch';
import MailingList from '../components/home/MailingList';
import { Footer } from 'antd/lib/layout/layout';
const About = () => {
    return (
        <div className="about">
            <Navbar />
            <UserSearch />
            <img src={aboutus} alt="" className="img-fluid" />
            <div className="container">
                <div className="about-content">
                    <h2>About Us</h2>
                    <hr/>
                    <div className="row">
                        <div className="col-md-3">
                            <img src={aboutsideimage} alt="" className="img-fluid" /> 
                        </div>
                        <div className="col-md-9">
                            <p>
                                We provide creatives a unique platform to monetize their designs through fashion while
                                providing people the opportunity to choose and wear their own unique designs. At twellr.com,
                                buyers can select the exact design they want, the cloth material he/she wants, make payments,
                                and it would be produced and delivered right to their doorsteps. At the same time, creatives
                                from any part of the world can upload their designs on the platform and get paid each time their
                                designs are used.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <MailingList />
            <Footer />
        </div>
    )
}

export default About
