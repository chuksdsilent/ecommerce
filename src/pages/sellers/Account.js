import React from 'react'
import Navbar from '../../components/home/Navbar';
import UserSearch from '../../components/home/UserSearch';
import { Tabs  } from 'antd';
import 'antd/dist/antd.css'; 
import MailingList from '../../components/home/MailingList';
import Footer from '../../components/home/Footer';



const Account = () => {
    const formName = `contact`
    const { TabPane } = Tabs;
    function callback(key) {
        console.log(key);
      }

        
    return (
        <div className="account">
            <Navbar />
            <UserSearch />
            <div className="account-content">
                <div className="container tabs">
                    <Tabs defaultActiveKey="1" onChange={callback}>
                        <TabPane tab="DASHBOARD" key="1">
                            From the dashboard you can manage your orders <br />

                            if you are not okafor@gmail.com please logout.

                        </TabPane>
                        <TabPane tab="ORDERS" key="2">
                        Content of Tab Pane 2
                        </TabPane>
                        <TabPane tab="ACCOUNT DETAILS" key="3">
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
                                            <div>
                                                <button className="btn btn-danger">Update</button>
                                            </div>  
                        </TabPane>
                        <TabPane tab="LOGOUT" key="4">
                        Content of Tab Pane 3
                        </TabPane>
                    </Tabs>
                </div>
            </div>
           <MailingList />
           <Footer />
        </div>
    )
}

export default Account
