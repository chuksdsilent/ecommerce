import React from 'react'
import CreativeMenu from './CreativeMenu';
import Navbar from '../../components/home/Navbar';
import UserSearch from '../../components/home/UserSearch';
import DigitalWallet from '../../components/DigitalWallet';

const UploadToPrintStack = () => {
    return (
        <div>
            <Navbar />
            <UserSearch />
            <div className="creative-dashboard">
                <div className="container">
                    <div className="card">
                        <div className="card-body">
                            <DigitalWallet />
                            <div className="row">
                                <div className="col-md-3">
                                    <div className="side-bar">
                                        <CreativeMenu />
                                    </div>
                                </div>
                                <div className="col-md-9">
                                    <h4>Upload to Print Stack</h4>
                                    <hr />
                                    <div className="mb-4">
                                        <label htmlFor="">Name</label><input type="text" className="form-control"/>
                                    </div>
                                    <div className="d-flex mb-4">
                                        <div>
                                            <div>Upload Design</div>
                                            <div> <input type="file"/> </div>
                                        </div>
                                    </div>
                                    <div className="mb-4" >
                                        <label htmlFor="">Price</label><input type="text" className="form-control"/>
                                    </div>
                                    <div><button className="form-control btn btn-danger">Submit</button></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UploadToPrintStack
