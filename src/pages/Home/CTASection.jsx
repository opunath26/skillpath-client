import React from "react";
import { Link } from "react-router";
import { FaArrowRight, FaRocket } from "react-icons/fa";

const CTASection = () => {
  return (
    <section className="px-4 md:px-10 py-20">
      <div className="mx-auto max-w-6xl container">
        <div className="relative bg-gradient-to-br from-[#0D9488] to-[#0b7a6f] shadow-2xl p-8 md:p-16 rounded-[2rem] md:rounded-[3rem] overflow-hidden">
          
          {/* Background Decorative Circles */}
          <div className="-top-24 -right-24 absolute bg-white/10 blur-3xl rounded-full w-64 h-64"></div>
          <div className="-bottom-24 -left-24 absolute bg-black/10 blur-3xl rounded-full w-64 h-64"></div>

          <div className="z-10 relative flex lg:flex-row flex-col justify-between items-center gap-10">
            {/* Left Content */}
            <div className="lg:max-w-2xl lg:text-left text-center">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md mb-6 px-4 py-2 rounded-full font-bold text-white text-sm animate-pulse">
                <FaRocket /> <span>Limited Time Opportunity!</span>
              </div>
              <h2 className="mb-6 font-black text-white text-3xl md:text-5xl leading-tight">
                Ready to Accelerate Your <br /> 
                <span className="text-amber-300">Career Journey?</span>
              </h2>
              <p className="mb-8 text-white/80 text-lg md:text-xl leading-relaxed">
                Join thousands of learners worldwide and get access to 100+ professional 
                courses. Start your 7-day free trial today!
              </p>
            </div>

            {/* Right Buttons */}
            <div className="flex sm:flex-row flex-col gap-4 w-full sm:w-auto">
              <Link
                to="/register"
                className="group flex justify-center items-center gap-2 bg-white hover:bg-slate-100 shadow-xl px-8 py-4 rounded-2xl font-black text-[#0D9488] text-lg active:scale-95 transition-all duration-300"
              >
                Join For Free 
                <FaArrowRight className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/allCourses"
                className="flex justify-center items-center bg-transparent px-8 py-4 border-2 border-white/30 hover:border-white rounded-2xl font-bold text-white text-lg active:scale-95 transition-all duration-300"
              >
                View Catalog
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;