import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaRocket } from "react-icons/fa";
import { AuthContext } from "../../context/AuthProvider";


const CTASection = () => {

  const { user } = useContext(AuthContext);

  return (
    <section className="relative bg-white py-16 md:py-24 overflow-hidden">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="relative bg-gradient-to-br from-[#0D9488] via-[#0f766e] to-[#0f5147] shadow-xl hover:shadow-2xl p-8 sm:p-12 md:p-16 rounded-3xl md:rounded-[2.5rem] overflow-hidden transition-all duration-300">
          
          {/* Background Decorative Blur Circles */}
          <div className="-top-24 -right-24 absolute bg-white/10 blur-3xl rounded-full w-72 h-72 pointer-events-none" />
          <div className="-bottom-24 -left-24 absolute bg-amber-400/10 blur-3xl rounded-full w-72 h-72 pointer-events-none" />

          <div className="z-10 relative flex lg:flex-row flex-col justify-between items-center gap-8 md:gap-12">
            
            {/* Left Content */}
            <div className="space-y-4 sm:space-y-6 lg:max-w-2xl lg:text-left text-center">
              <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md px-4 py-1.5 border border-white/20 rounded-full font-semibold text-white text-xs sm:text-sm animate-pulse">
                <FaRocket className="text-amber-300" />
                <span>Limited Time Opportunity!</span>
              </div>

              <h2 className="font-extrabold text-white text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight">
                Ready to Accelerate Your <br className="hidden sm:inline" />
                <span className="text-amber-300">Career Journey?</span>
              </h2>

              <p className="mx-auto lg:mx-0 max-w-xl text-white/90 text-sm sm:text-base md:text-lg leading-relaxed">
                Join thousands of successful learners worldwide and gain instant access to 100+ professional courses. Start your learning journey today!
              </p>
            </div>

            {/* Right Action Buttons */}
            <div className="flex sm:flex-row xl:flex-row flex-col lg:flex-col gap-3.5 sm:gap-4 w-full sm:w-auto lg:min-w-[280px]">
              
              <Link
                to={user ? "/allCourses" : "/register"}
                className="group flex justify-center items-center gap-2 bg-white hover:bg-amber-300 shadow-lg px-7 py-3.5 sm:py-4 rounded-xl font-bold text-[#0D9488] hover:text-slate-900 text-sm sm:text-base active:scale-95 transition-all duration-300"
              >
                <span>{user ? "Explore Courses" : "Join For Free"}</span>
                <FaArrowRight className="transition-transform group-hover:translate-x-1 duration-300" />
              </Link>
              
              <Link
                to="/allCourses"
                className="flex justify-center items-center bg-white/10 hover:bg-white/20 backdrop-blur-md px-7 py-3.5 sm:py-4 border border-white/30 hover:border-white rounded-xl font-semibold text-white text-sm sm:text-base active:scale-95 transition-all duration-300"
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