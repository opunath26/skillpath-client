import React from "react";
import aboutImg from "../../assets/About.avif";
const About = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="flex md:flex-row flex-col-reverse items-center gap-10 mx-auto px-4 md:px-10 max-w-7xl">
        
        {/* Text Content */}
        <div className="space-y-6 md:w-1/2">
          <h2 className="font-bold text-[#39b8ad] text-4xl">
            About Skill Path
          </h2>
          <p className="text-gray-700">
            Skill Path is a modern online learning platform designed to empower individuals with the skills they need for personal and professional growth. Our expert-led courses, interactive content, and supportive community ensure you achieve your goals.
          </p>
          <ul className="space-y-2 text-gray-700 list-disc list-inside">
            <li>Expert-led courses across various domains</li>
            <li>Interactive learning and practical projects</li>
            <li>Community support and mentorship</li>
            <li>Flexible and self-paced learning</li>
          </ul>
        </div>

        {/* Image */}
        <div className="md:w-1/2">
          <img
            src={aboutImg}
            alt="About Skill Path"
            className="shadow-lg rounded-2xl w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
