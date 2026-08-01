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
            {/* 1. Hero / Hero Banner */}
            <Banner />

            {/* 2. Social Proof / Trust Logos */}
            <PartnerLogos />

            {/* 3. Interactive Quiz (Guide undecided users early) */}
            <CourseFinder />

            {/* 4. Main Product / Courses Showcase */}
            <Courses />

            {/* 5. Platform Impact / Real Numbers */}
            <StatsSection />

            {/* 6. Key Value Propositions */}
            <WhyChooseUs />

            {/* 7. Step-by-Step Process */}
            <HowItWorks />

            {/* 8. About the Platform */}
            <About />

            {/* 9. Expert Mentors */}
            <TopInstructors />

            {/* 10. Student Testimonials */}
            <Reviews />

            {/* 11. Free Community Engagement (Discord/Telegram) */}
            <CommunityBanner />

            {/* 12. Objections & Questions Resolver */}
            <FAQ />

            {/* 13. Final Call to Action */}
            <CTASection />
        </div>
    );
};

export default Home;