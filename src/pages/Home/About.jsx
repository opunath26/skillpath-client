import React from "react";
import aboutImg from "../../assets/About.avif";

const About = () => {
  const features = [
    "Expert-led courses across various domains",
    "Interactive learning and practical projects",
    "Community support and mentorship",
    "Flexible and self-paced learning",
  ];

  return (
    <section className="bg-base-100 py-20">
      <div className="flex md:flex-row flex-col-reverse items-center gap-12 mx-auto px-4 md:px-10 max-w-7xl">
        
        {/* Text Content */}
        <div className="space-y-6 md:w-1/2">
          <div className="inline-block bg-primary/10 px-4 py-1.5 rounded-full font-semibold text-primary text-sm tracking-wide">
            Who We Are
          </div>
          
          <h2 className="font-extrabold text-slate-800 text-3xl md:text-4xl lg:text-5xl leading-tight">
            Empowering Your Journey with <span className="text-primary">Skill Path</span>
          </h2>

          <p className="text-slate-600 text-base md:text-lg leading-relaxed">
            Skill Path is a modern online learning platform designed to empower individuals with the skills they need for personal and professional growth. Our expert-led courses, interactive content, and supportive community ensure you achieve your goals effectively.
          </p>

          <ul className="space-y-3.5 pt-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-3 font-medium text-slate-700">
                <span className="flex justify-center items-center bg-primary/10 rounded-full w-6 h-6 text-primary shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Image Container */}
        <div className="relative md:w-1/2">
          <div className="-top-4 -left-4 absolute bg-primary/20 rounded-2xl w-full h-full -rotate-2 transform"></div>
          <img
            src={aboutImg}
            alt="About Skill Path"
            className="relative shadow-xl rounded-2xl w-full h-[380px] md:h-[450px] object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default About;