import React, { useContext, useState } from "react";
import { useLoaderData, useNavigate } from "react-router";
import {
  FaUsers,
  FaClock,
  FaStar,
  FaCheckCircle,
  FaGlobe,
  FaCertificate,
  FaInfinity,
  FaShareAlt,
  FaBookOpen,
  FaUserGraduate,
  FaQuoteLeft,
  FaLock,
  FaFileAlt,
  FaComments,
} from "react-icons/fa";
import { AuthContext } from "../../context/AuthProvider.jsx";
import Spinner from "../../components/Spinner.jsx";

const CourseDetails = () => {
  const loaderData = useLoaderData();
  const course = loaderData?.result || loaderData;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  // Active Tab State (Interactive Tabbed Layout)
  const [activeTab, setActiveTab] = useState("overview");

  if (!course) {
    return (
      <div className="flex justify-center items-center bg-slate-100 min-h-screen">
        <Spinner />
      </div>
    );
  }

  const handleEnroll = () => {
    navigate(`/enrollModal/${course._id}`);
  };

  const courseImage =
    course.thumbnail ||
    course.image ||
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800";

  // Mock Reviews Data (5-7 Reviews)
  const reviews = [
    {
      id: 1,
      name: "Anik Rahman",
      role: "Frontend Developer",
      rating: 5,
      comment:
        "কোড কোয়ালিটি এবং কনসেপ্ট বোঝানোর নিয়ম অসাধারণ ছিল! প্রজেক্টগুলো সরাসরি পোর্টফোলিওতে যোগ করার মতো।",
      avatar: "https://i.pravatar.cc/150?img=11",
    },
    {
      id: 2,
      name: "Nadia Islam",
      role: "UI/UX Student",
      rating: 5,
      comment:
        "খুবই গোছানো কোর্স। বিগিনার থেকে এডভান্সড বিষয়গুলো ধাপে ধাপে সুন্দরভাবে কভার করা হয়েছে।",
      avatar: "https://i.pravatar.cc/150?img=5",
    },
    {
      id: 3,
      name: "Tanvir Hasan",
      role: "Junior Software Engineer",
      rating: 5,
      comment:
        "ইন্সট্রাক্টরের সাপোর্ট চমৎকার। জব ইন্টারভিউয়ের জন্য দরকারি প্র্যাকটিক্যাল জ্ঞান পেয়েছি।",
      avatar: "https://i.pravatar.cc/150?img=12",
    },
    {
      id: 4,
      name: "Mehedi Hasan",
      role: "Full Stack Learner",
      rating: 4,
      comment:
        "কোর্সের মেটেরিয়াল অনেক রিসোর্সফুল। রিয়েল-ওয়ার্ল্ড প্রজেক্ট শিখতে চাইলে বেস্ট হবে।",
      avatar: "https://i.pravatar.cc/150?img=33",
    },
    {
      id: 5,
      name: "Sumi Akter",
      role: "Web Designer",
      rating: 5,
      comment:
        "একদম সঠিক দিকনির্দেশনা পেয়েছি। কোর্সটি শেষ করে কাজের প্রতি আত্মবিশ্বাস অনেক বেড়েছে।",
      avatar: "https://i.pravatar.cc/150?img=20",
    },
    {
      id: 6,
      name: "Rifat Chowdhury",
      role: "CSE Student",
      rating: 5,
      comment:
        "বেসিক কনসেপ্ট ক্লিয়ার করার জন্য অসাধারণ একটি কোর্স। যে কারও জন্যই ভীষণ হেল্পফুল হবে।",
      avatar: "https://i.pravatar.cc/150?img=15",
    },
  ];

  return (
    <div className="bg-slate-50/50 min-h-screen font-sans text-slate-800">
      {/*  Full-Width Header with Light Glassmorphism */}
      <header className="relative bg-gradient-to-r from-teal-900 via-slate-900 to-slate-900 py-12 md:py-16 overflow-hidden text-white">
        <div className="top-0 right-0 absolute bg-teal-500/10 blur-3xl rounded-full w-96 h-96 pointer-events-none" />

        <div className="mx-auto px-4 md:px-8 max-w-7xl container">
          <div className="items-center gap-8 grid lg:grid-cols-12">
            {/* Header Text Info */}
            <div className="space-y-4 lg:col-span-8">
              <div className="flex flex-wrap items-center gap-2">
                <span className="bg-teal-500/20 backdrop-blur-md px-3 py-1 border border-teal-400/30 rounded-full font-semibold text-teal-300 text-xs">
                  {course.category || "Professional Development"}
                </span>
                <span className="flex items-center gap-1 bg-amber-500/20 backdrop-blur-md px-3 py-1 border border-amber-400/30 rounded-full font-bold text-amber-300 text-xs">
                  <FaStar /> {course.rating || "4.9"} (150+ Reviews)
                </span>
              </div>

              <h1 className="font-extrabold text-3xl md:text-5xl leading-tight tracking-tight">
                {course.title}
              </h1>

              <p className="max-w-2xl text-slate-300 text-base md:text-lg leading-relaxed">
                {course.description
                  ? `${course.description.substring(0, 160)}...`
                  : "Gain industry-ready practical skills with step-by-step guidance."}
              </p>

              <div className="flex flex-wrap items-center gap-6 pt-2 text-slate-300 text-xs md:text-sm">
                <div className="flex items-center gap-2">
                  <FaUsers className="text-teal-400" />
                  <span>{course.students?.length || 0} Enrolled</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaClock className="text-teal-400" />
                  <span>{course.duration || "12+ Hours"} Self-Paced</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaGlobe className="text-teal-400" />
                  <span>Bangla & English</span>
                </div>
              </div>
            </div>

            {/* Header Right Mini Author Info */}
            <div className="lg:col-span-4">
              <div className="bg-white/10 backdrop-blur-md p-5 border border-white/15 rounded-2xl">
                <span className="block mb-2 text-slate-300 text-xs">
                  Course Instructor
                </span>
                <div className="flex items-center gap-3">
                  <img
                    src={
                      course.instructorPhoto ||
                      "https://i.ibb.co/mJR9n0K/user-placeholder.png"
                    }
                    alt={course.instructorName || "Instructor"}
                    className="border-2 border-teal-400 rounded-xl w-12 h-12 object-cover"
                    onError={(e) => {
                      e.target.src =
                        "https://i.ibb.co/mJR9n0K/user-placeholder.png";
                    }}
                  />
                  <div>
                    <h4 className="font-bold text-white text-base">
                      {course.instructorName || "Senior Industry Expert"}
                    </h4>
                    <p className="text-teal-300 text-xs">Lead Instructor</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/*  Main Body (Full Width Layout with Floating Sidebar) */}
      <main className="mx-auto px-4 md:px-8 py-10 max-w-7xl container">
        <div className="items-start gap-10 grid lg:grid-cols-12">
          
          {/* Left Side: Interactive Tabs & Content (8 Cols) */}
          <div className="space-y-8 lg:col-span-8">
            
            {/*  Interactive Tab Buttons */}
            <div className="flex items-center gap-2 bg-white/80 shadow-sm backdrop-blur-md p-1.5 border border-slate-200/80 rounded-2xl">
              <button
                onClick={() => setActiveTab("overview")}
                className={`flex-1 py-3 px-4 rounded-xl font-bold text-sm transition-all cursor-pointer flex items-center justify-center gap-2 ${
                  activeTab === "overview"
                    ? "bg-teal-600 text-white shadow-md shadow-teal-600/20"
                    : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                <FaBookOpen /> Overview
              </button>

              <button
                onClick={() => setActiveTab("curriculum")}
                className={`flex-1 py-3 px-4 rounded-xl font-bold text-sm transition-all cursor-pointer flex items-center justify-center gap-2 ${
                  activeTab === "curriculum"
                    ? "bg-teal-600 text-white shadow-md shadow-teal-600/20"
                    : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                <FaFileAlt /> Modules
              </button>

              <button
                onClick={() => setActiveTab("instructor")}
                className={`flex-1 py-3 px-4 rounded-xl font-bold text-sm transition-all cursor-pointer flex items-center justify-center gap-2 ${
                  activeTab === "instructor"
                    ? "bg-teal-600 text-white shadow-md shadow-teal-600/20"
                    : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                <FaUserGraduate /> Instructor
              </button>
            </div>

            {/*  Tab Content Window */}
            <div className="bg-white/80 shadow-sm backdrop-blur-md p-6 md:p-8 border border-slate-200/80 rounded-3xl min-h-[300px]">
              
              {/* TAB 1: OVERVIEW */}
              {activeTab === "overview" && (
                <div className="space-y-6">
                  <div>
                    <h3 className="mb-3 font-extrabold text-slate-900 text-xl">
                      About This Course
                    </h3>
                    <p className="text-slate-600 text-sm md:text-base leading-relaxed whitespace-pre-line">
                      {course.description}
                    </p>
                  </div>

                  <div className="pt-4 border-slate-100 border-t">
                    <h4 className="mb-4 font-bold text-slate-900 text-base">
                      What You'll Learn:
                    </h4>
                    <div className="gap-3 grid sm:grid-cols-2">
                      {[
                        "Complete practical project workflows.",
                        "Clean code structure & modern standards.",
                        "Essential tools & industry methodologies.",
                        "Portfolio-ready deliverables upon completion.",
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-slate-700 text-sm">
                          <FaCheckCircle className="mt-0.5 text-teal-600 shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 2: CURRICULUM / MODULES */}
              {activeTab === "curriculum" && (
                <div className="space-y-4">
                  <h3 className="mb-2 font-extrabold text-slate-900 text-xl">
                    Course Structure & Topics
                  </h3>
                  <p className="mb-4 text-slate-500 text-xs">
                    Access all lessons and resource materials right after enrollment.
                  </p>

                  {[
                    "Module 1: Fundamental Concepts & Setup",
                    "Module 2: Core Architecture & Hands-on Work",
                    "Module 3: Advanced Optimization & Features",
                    "Module 4: Real-world Project Construction",
                    "Module 5: Final Review & Deployment Strategy",
                  ].map((mod, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center bg-slate-50 p-4 border border-slate-200/60 rounded-2xl"
                    >
                      <div className="flex items-center gap-3">
                        <span className="font-extrabold text-teal-600 text-xs">
                          0{index + 1}
                        </span>
                        <span className="font-bold text-slate-800 text-sm">
                          {mod}
                        </span>
                      </div>
                      <FaLock className="text-slate-400 text-xs" />
                    </div>
                  ))}
                </div>
              )}

              {/* TAB 3: INSTRUCTOR */}
              {activeTab === "instructor" && (
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <img
                      src={
                        course.instructorPhoto ||
                        "https://i.ibb.co/mJR9n0K/user-placeholder.png"
                      }
                      alt={course.instructorName}
                      className="border-2 border-teal-600 rounded-2xl w-16 h-16 object-cover"
                      onError={(e) => {
                        e.target.src =
                          "https://i.ibb.co/mJR9n0K/user-placeholder.png";
                      }}
                    />
                    <div>
                      <h3 className="font-extrabold text-slate-900 text-xl">
                        {course.instructorName || "Senior Industry Expert"}
                      </h3>
                      <p className="font-semibold text-teal-600 text-xs">
                        Lead Instructor & Mentor
                      </p>
                    </div>
                  </div>
                  <p className="pt-2 text-slate-600 text-sm leading-relaxed">
                    An experienced professional dedicated to teaching practical skills, industry workflows, and modern development techniques through hands-on project guidance.
                  </p>
                </div>
              )}
            </div>

            {/*  Student Reviews Section (5-7 Reviews) */}
            <div className="bg-white/80 shadow-sm backdrop-blur-md p-6 md:p-8 border border-slate-200/80 rounded-3xl">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="flex items-center gap-2 font-extrabold text-slate-900 text-xl md:text-2xl">
                    <FaComments className="text-teal-600" /> Student Reviews
                  </h3>
                  <p className="mt-1 text-slate-500 text-xs">
                    What learners are saying about this course
                  </p>
                </div>
                <div className="flex items-center gap-1 bg-amber-50 px-3 py-1.5 border border-amber-200 rounded-xl font-bold text-amber-700 text-sm">
                  <FaStar className="text-amber-500" /> {course.rating || "4.9"}
                </div>
              </div>

              {/* Reviews Grid */}
              <div className="gap-4 grid sm:grid-cols-2">
                {reviews.map((rev) => (
                  <div
                    key={rev.id}
                    className="flex flex-col justify-between space-y-3 bg-slate-50/80 p-4 border border-slate-200/60 rounded-2xl"
                  >
                    <p className="text-slate-600 text-xs md:text-sm italic leading-relaxed">
                      "{rev.comment}"
                    </p>
                    <div className="flex items-center gap-3 pt-2 border-slate-200/50 border-t">
                      <img
                        src={rev.avatar}
                        alt={rev.name}
                        className="rounded-full w-8 h-8 object-cover"
                      />
                      <div>
                        <p className="font-bold text-slate-900 text-xs">
                          {rev.name}
                        </p>
                        <p className="text-[10px] text-slate-500">
                          {rev.role}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Side: Clean Image Card & Checkout (4 Cols) */}
          <div className="top-8 lg:sticky lg:col-span-4">
            <div className="bg-white/90 shadow-slate-200/50 shadow-xl backdrop-blur-md p-5 border border-slate-200/80 rounded-3xl overflow-hidden">
              
              {/* Thumbnail Image Box (No Video Icon) */}
              <div className="mb-5 border border-slate-100 rounded-2xl aspect-video overflow-hidden">
                <img
                  src={courseImage}
                  alt={course.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src =
                      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800";
                  }}
                />
              </div>

              {/* Price Display */}
              <div className="mb-5">
                <span className="block mb-1 font-semibold text-slate-400 text-xs uppercase tracking-wider">
                  Course Fee
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="font-black text-slate-900 text-3xl">
                    ৳{course.price || "0"}
                  </span>
                  <span className="text-slate-400 text-sm line-through">
                    ৳{course.price ? Math.round(course.price * 1.4) : "999"}
                  </span>
                </div>
              </div>

              {/* Enrollment Button */}
              <button
                onClick={handleEnroll}
                className="bg-teal-600 hover:bg-teal-700 active:bg-teal-800 shadow-lg shadow-teal-600/20 mb-5 py-3.5 rounded-2xl w-full font-bold text-white text-base active:scale-[0.98] transition-all cursor-pointer"
              >
                Enroll Now
              </button>

              <hr className="mb-5 border-slate-100" />

              {/* Includes List */}
              <div className="space-y-3">
                <p className="font-bold text-slate-900 text-xs uppercase tracking-wider">
                  Course Package Includes:
                </p>
                <div className="flex items-center gap-3 text-slate-600 text-xs md:text-sm">
                  <FaClock className="text-teal-600 shrink-0" />
                  <span>{course.duration || "12+ Hours"} Learning Content</span>
                </div>
                <div className="flex items-center gap-3 text-slate-600 text-xs md:text-sm">
                  <FaInfinity className="text-teal-600 shrink-0" />
                  <span>Lifetime Access to Materials</span>
                </div>
                <div className="flex items-center gap-3 text-slate-600 text-xs md:text-sm">
                  <FaCertificate className="text-teal-600 shrink-0" />
                  <span>Certificate of Completion</span>
                </div>
              </div>

              {/* Share */}
              <div className="mt-6 pt-4 border-slate-100 border-t text-center">
                <button className="inline-flex items-center gap-2 font-semibold text-slate-500 hover:text-teal-600 text-xs transition-colors cursor-pointer">
                  <FaShareAlt /> Share Course
                </button>
              </div>

            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default CourseDetails;