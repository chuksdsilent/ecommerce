import React from 'react'
import Navbar from '../../components/home/Navbar';
import UserSearch from '../../components/home/UserSearch';
import {Link} from 'react-router-dom';
import CreativeMenu from './CreativeMenu';
const Dashboard = () => {
    return (
        <div>
            <Navbar />
            <UserSearch />
            <div className="creative-dashboard">
                <div className="container">
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-3">
                                    <div className="side-bar">
                                        <CreativeMenu />
                                    </div>
                                </div>
                                <div className="col-md-9"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
