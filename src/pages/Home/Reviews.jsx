import React from "react";
import Slider from "react-slick";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const reviews = [
  {
    name: "Pritom Shil",
    role: "Web Developer",
    image: "https://i.ibb.co.com/PZ1JgZzN/lreora.jpg",
    comment: "This platform transformed my career. The courses are practical, engaging, and directly applicable to real-world projects!",
    rating: 5,
  },
  {
    name: "Ankon Das",
    role: "UI/UX Designer",
    image: "https://i.ibb.co.com/YFFG3LLP/mac.jpg",
    comment: "I love the interactive hands-on projects. The instructors are super supportive and always ready to help.",
    rating: 5,
  },
  {
    name: "SD Shan",
    role: "Data Analyst",
    image: "https://i.ibb.co.com/PZ1JgZzN/lreora.jpg",
    comment: "Highly recommend Skill Path! The community support and industry-standard course contents are top notch.",
    rating: 5,
  },
  {
    name: "SRK Anurag",
    role: "Frontend Developer",
    image: "https://i.ibb.co.com/PZ1JgZzN/lreora.jpg",
    comment: "Amazing learning platform! I learned modern web development stacks in just a few months.",
    rating: 5,
  },
  {
    name: "MAC Gunjon",
    role: "Backend Developer",
    image: "https://i.ibb.co.com/YFFG3LLP/mac.jpg",
    comment: "Excellent resources, structured modules, and a very helpful mentor team.",
    rating: 4,
  },
];

const Reviews = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: false,
    pauseOnFocus: false,
    swipeToSlide: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="relative bg-white py-16 md:py-24 overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="top-1/2 right-0 absolute bg-teal-500/5 blur-[120px] rounded-full w-80 h-80 pointer-events-none" />

      <div className="relative mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Section Header */}
        <div className="space-y-3 mx-auto mb-12 md:mb-16 max-w-2xl text-center">
          <span className="inline-block bg-teal-50 px-3.5 py-1.5 border border-teal-100 rounded-full font-semibold text-[#0D9488] text-xs md:text-sm uppercase tracking-wider">
            Student Testimonials
          </span>
          <h2 className="font-extrabold text-slate-900 text-3xl sm:text-4xl tracking-tight">
            Success Stories from Our Learners
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Discover how Skill Path has empowered thousands of students to transform their careers and build real skills.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="pb-8">
          <Slider {...settings} className="-mx-2 sm:-mx-3 review-slider">
            {reviews.map((review, index) => (
              <div key={index} className="px-2 sm:px-3 py-4 h-full">
                <div className="group relative flex flex-col justify-between bg-white hover:bg-slate-50/50 shadow-sm hover:shadow-xl p-6 sm:p-8 border border-slate-100 hover:border-teal-200/80 rounded-2xl h-full min-h-[280px] transition-all duration-300">
                  
                  {/* Quote Icon Overlay */}
                  <FaQuoteLeft className="top-6 right-6 absolute text-slate-100 group-hover:text-teal-500/10 text-4xl sm:text-5xl transition-colors duration-300 pointer-events-none" />

                  <div className="z-10 relative flex flex-col justify-between h-full">
                    <div>
                      {/* Star Ratings */}
                      <div className="flex items-center gap-1 mb-4">
                        {Array.from({ length: 5 }, (_, i) => (
                          <FaStar
                            key={i}
                            className={`text-sm ${
                              i < review.rating ? "text-amber-400" : "text-slate-200"
                            }`}
                          />
                        ))}
                      </div>

                      {/* Comment */}
                      <p className="mb-6 text-slate-600 text-sm sm:text-base italic leading-relaxed">
                        "{review.comment}"
                      </p>
                    </div>

                    {/* User Info Header / Avatar */}
                    <div className="flex items-center gap-3.5 mt-auto pt-5 border-slate-100 border-t">
                      <img
                        src={review.image}
                        alt={review.name}
                        className="shadow-sm rounded-full ring-2 ring-teal-500/20 w-12 h-12 object-cover"
                      />
                      <div>
                        <h3 className="font-bold text-slate-900 group-hover:text-[#0D9488] text-base leading-snug transition-colors duration-200">
                          {review.name}
                        </h3>
                        <p className="font-medium text-slate-500 text-xs sm:text-sm">
                          {review.role}
                        </p>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

      </div>

      {/* Custom Slick Dots CSS */}
      <style>{`
        .review-slider .slick-dots {
          bottom: -20px;
        }
        .review-slider .slick-dots li button:before {
          color: #cbd5e1;
          font-size: 8px;
          opacity: 0.8;
          transition: all 0.3s ease;
        }
        .review-slider .slick-dots li.slick-active button:before {
          color: #0D9488;
          font-size: 11px;
          opacity: 1;
        }
      `}</style>
    </section>
  );
};

export default Reviews;