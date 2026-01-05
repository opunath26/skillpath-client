import React from 'react';
import Banner from './Banner';
import About from './About';
import WhyChooseUs from './WhyChooseUs';
import Reviews from './Reviews';
import FAQ from './FAQ';
import TopInstructors from './TopInstructors';
import Courses from './Courses';
import HowItWorks from './HowItWorks';
import PartnerLogos from './PartnerLogos';
import CTASection from './CTASection';
import StatsSection from './StatsSection';

const Home = () => {
    return (
        <div>
            <Banner></Banner>            
            <About></About>
            <Courses></Courses>
            <PartnerLogos></PartnerLogos>
            <StatsSection></StatsSection>
            <WhyChooseUs></WhyChooseUs>
            <HowItWorks></HowItWorks>
            <Reviews></Reviews>
            <TopInstructors></TopInstructors>
            <FAQ></FAQ>
            <CTASection></CTASection>
        </div>
    );
};

export default Home;