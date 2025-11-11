// Banner.jsx
import React from "react";

const Banner = () => {
    return (
        <div className="relative flex justify-center items-center shadow-lg w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden text-center">

            {/* Background Image */}
            <img
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
                alt="Banner"
                className="-z-10 absolute brightness-75 w-full h-full object-cover"
            />

            {/* Content */}
            <div className="px-4 md:px-10 text-white">
                <h1 className="mb-4 font-bold text-4xl md:text-5xl lg:text-6xl">
                    Welcome to <span className="text-[#ffdd59]">Skill Path</span>
                </h1>
                <p className="mb-6 text-lg md:text-xl">
                    Learn, Grow, and Achieve Your Goals with Our Expert-Led Courses
                </p>

                <div className="flex flex-wrap justify-center gap-4">
                    <button className="bg-gradient-to-r from-[#ff6b6b] to-[#ff4757] shadow-md px-6 py-3 rounded-md font-semibold text-white hover:scale-105 transition-transform duration-300">
                        Get Started
                    </button>
                    <button className="bg-white/20 hover:bg-white/40 px-6 py-3 border border-white rounded-md font-semibold text-white transition duration-300">
                        Explore Courses
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
