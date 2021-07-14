import React, {useEffect} from 'react';
import '../src/libraries/bootstrap/css/bootstrap.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css'
import Home from './pages/Home';
import About from './pages/About';
import Account from './pages/sellers/Account';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Receipt from './pages/Receipt';
import CreativeRegistration from './pages/CreativeRegistration';
import Dashboard from './pages/sellers/Dashboard';
import UploadToPrintStack from './pages/sellers/UploadToPrintStack';
import UploadToDesignStack from './pages/sellers/UploadToDesignStack';
import RegisterComplete from './pages/RegisterComplete';
import { useDispatch } from 'react-redux';
import CreativeState from './context/creatives/CreativeState';


function App() {
  
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch({
          type: "LOGGED_IN_USER",
          payload:"Samdon"
      })
  }
}, [])
  return (
    <CreativeState>
      <Router>
        <div className="App">
          <Switch>      
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/account" component={Account} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/checkout" component={Checkout} />          
            <Route exact path="/receipt" component={Receipt} />          
            <Route exact path="/creative/upload-to-printstack" component={UploadToPrintStack} />          
            <Route exact path="/creative/upload-to-designstack" component={UploadToDesignStack} />          
            <Route exact path="/creative/dashboard" component={Dashboard} />                   
            <Route exact path="/product/:id" component={Product} />
            <Route exact path="/register" component={RegisterComplete} />
          </Switch>
        </div>
      </Router>
    </CreativeState>
  );
}

export default App;
