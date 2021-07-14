import React from 'react'
import CreativeMenu from './CreativeMenu';
import Navbar from '../../components/home/Navbar';
import UserSearch from '../../components/home/UserSearch';

const UploadToDesignStack = () => {
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
                                <div className="col-md-9">
                                    <h4>Upload to Design Stack</h4>
                                    <hr />
                                    <div className="col-md-12 mb-4">
                                        <label htmlFor="">Name</label><input type="text" className="form-control"/>
                                    </div>
                                    <div className="col-md-12 mb-4">
                                        <label htmlFor="">Description</label>
                                        <textarea name="" id="" cols="30" rows="10" className="form-control"></textarea>
                                    </div>
                                    <div className="d-flex mb-4">
                                        <div>
                                            <div>Front</div>
                                            <div> <input type="file"/> </div>
                                        </div>
                                        <div>
                                            <div>Back</div>
                                            <div> <input type="file"/></div>
                                        </div>
                                        <div>
                                            <div>Side</div>
                                            <div> <input type="file"/></div>
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

export default UploadToDesignStack
