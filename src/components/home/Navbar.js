import React, { useState }  from 'react'
import {Link} from 'react-router-dom';

const Navbar = () => {

    const [loggedIn, setLoggedIn] = useState(false);
    const logout = () => {
        setLoggedIn(false)
    }
    const loggedin = () => {
        setLoggedIn(true)
    }

    return (
        <div className="nav-bar">
              <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <div className="container-fluid">
                        <div className="collapse navbar-collapse me-auto">
                            <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
                                <Link to="/about">
                                    About Us
                                </Link>                                        
                                <Link to="/account">
                                    My Account
                                </Link>
                                <Link to="/tracking">
                                    Order Tracking
                                </Link>
                            </ul>
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item mr-3">
                                    Need help? Call us
                                </li>
                                <li className="nav-item">
                                    0858478565
                                </li>
                                <li className="nav-item">
                                    {
                                        (loggedIn) ? (
                                            
                                            <Link to='/'  onClick={() => logout()}>
                                                Logout
                                            </Link>   
                                        ) : (
                                            
                                            <Link to='/register'>
                                                Register as Creative
                                            </Link>   
                                            
                                        )
                                    }
                                </li>
                             
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
