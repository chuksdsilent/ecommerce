import React from 'react'
import {Link} from 'react-router-dom';
const CreativeMenu = () => {
    return (
        <div>
            <Link to="/creative/dashboard">
                Dashboard
            </Link>
            <Link to="/creative/upload-to-printstack">
                Upload to Printable Stack
            </Link>
           
            <Link to="/creative/upload-to-designstack">
                Upload to Design Stack
            </Link>
           
            <Link to="/">
                Logout
            </Link>
        </div>
    )
}

export default CreativeMenu
