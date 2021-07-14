import React from 'react'
import Navbar from '../components/home/Navbar';
import UserSearch from '../components/home/UserSearch';
import '../css/home.css'
import Carousel from '../components/home/Carousel';
import LatestDesign from '../components/home/LatestDesign';
import TrendingDesigns from '../components/home/TrendingDesigns';
import ShopNow from '../components/home/ShopNow';
import FeaturedDesigns from '../components/home/FeaturedDesigns';
import RockedItBetter from '../components/home/RockedItBetter';
import MailingList from '../components/home/MailingList';
import Footer from '../components/home/Footer';

const Home = () => {
    return (
        <div className="home">
            <Navbar />        
            <UserSearch />
            <Carousel />
            <LatestDesign />
            <ShopNow />
            <TrendingDesigns />
            <RockedItBetter />
            <FeaturedDesigns />
            <MailingList />
            <Footer />
        </div>
    )
}

export default Home
