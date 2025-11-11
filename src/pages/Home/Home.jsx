import React from 'react';
import Banner from './Banner';
import About from './About';
import WhyChooseUs from './WhyChooseUs';
import Reviews from './Reviews';
import FAQ from './FAQ';
import TopInstructors from './TopInstructors';
import Courses from './Courses';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Courses></Courses>
            <WhyChooseUs></WhyChooseUs>
            <Reviews></Reviews>
            <TopInstructors></TopInstructors>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;