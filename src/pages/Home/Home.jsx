import React from 'react';
import Banner from './Banner';
import About from './About';
import WhyChooseUs from './WhyChooseUs';
import Reviews from './Reviews';
import FAQ from './FAQ';
import TopInstructors from './TopInstructors';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <WhyChooseUs></WhyChooseUs>
            <Reviews></Reviews>
            <TopInstructors></TopInstructors>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;