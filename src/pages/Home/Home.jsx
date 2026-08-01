import React from 'react';
import Banner from './Banner';
import PartnerLogos from './PartnerLogos';
import Courses from './Courses';
import WhyChooseUs from './WhyChooseUs';
import About from './About';
import HowItWorks from './HowItWorks';
import StatsSection from './StatsSection';
import TopInstructors from './TopInstructors';
import Reviews from './Reviews';
import FAQ from './FAQ';
import CTASection from './CTASection';
import CourseFinder from './CourseFinder';

const Home = () => {
    return (
        <div>
            <Banner />
            <PartnerLogos />
            <Courses />
            <WhyChooseUs />
            <About />
            <HowItWorks />
            <StatsSection />
            <TopInstructors />
            <Reviews />
            <FAQ />
            <CTASection />
            <CourseFinder />
        </div>
    );
};

export default Home;