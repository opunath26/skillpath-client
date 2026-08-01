import React from 'react';
import Banner from './Banner';
import PartnerLogos from './PartnerLogos';
import CourseFinder from './CourseFinder';
import Courses from './Courses';
import StatsSection from './StatsSection';
import WhyChooseUs from './WhyChooseUs';
import HowItWorks from './HowItWorks';
import About from './About';
import TopInstructors from './TopInstructors';
import Reviews from './Reviews';
import CommunityBanner from './CommunityBanner';
import FAQ from './FAQ';
import CTASection from './CTASection';

const Home = () => {
    return (
        <div className="space-y-4">
            <Banner />
            <PartnerLogos />
            <CourseFinder />
            <Courses />
            <StatsSection />
            <WhyChooseUs />
            <HowItWorks />
            <About />
            <TopInstructors />
            <Reviews />
            <CommunityBanner />
            <FAQ />
            <CTASection />
        </div>
    );
};

export default Home;