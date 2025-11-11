import React from 'react';
import Banner from './Banner';
import About from './About';
import WhyChooseUs from './WhyChooseUs';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <WhyChooseUs></WhyChooseUs>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;