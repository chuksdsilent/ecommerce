import React from 'react'
import CreativeMenu from './CreativeMenu';

const DigitalWallet = () => {
    return (
        <div>
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

export default DigitalWallet
