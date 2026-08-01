import React, { useState } from "react";
import { useNavigate } from "react-router";
import { 
  FaCompass, 
  FaArrowRight, 
  FaCheckCircle, 
  FaRedo, 
  FaGraduationCap, 
  FaClock, 
  FaStar 
} from "react-icons/fa";

const quizQuestions = [
  {
    id: 1,
    question: "What is your primary goal right now?",
    options: [
      { label: "Build websites & web apps", category: "Web Development" },
      { label: "Design UI/UX & visuals", category: "Design" },
      { label: "Analyze data & master AI tools", category: "Data & AI" },
      { label: "Grow business & digital marketing", category: "Marketing" },
    ],
  },
  {
    id: 2,
    question: "What is your current experience level?",
    options: [
      { label: "Complete Beginner (Zero coding/design background)", level: "Beginner" },
      { label: "Intermediate (Know the basics, want hands-on projects)", level: "Intermediate" },
      { label: "Advanced (Looking for industry-level mastery)", level: "Advanced" },
    ],
  },
  {
    id: 3,
    question: "How much time can you commit weekly?",
    options: [
      { label: "3 - 5 Hours / week", commitment: "Part-time" },
      { label: "10 - 15 Hours / week", commitment: "Standard" },
      { label: "20+ Hours / week (Bootcamp style)", commitment: "Intensive" },
    ],
  },
];

// Sample recommended courses mapped to categories
const recommendedCourseData = {
  "Web Development": {
    title: "Full-Stack Web Development Mastery",
    desc: "Master React, Node.js, Express, and MongoDB with real-world industry projects.",
    duration: "12 Weeks",
    rating: "4.9",
    category: "Web Development",
    path: "/allCourses",
  },
  Design: {
    title: "UI/UX Design & Product Strategy",
    desc: "Learn Figma, Design Systems, Prototyping, and User Research from scratch.",
    duration: "8 Weeks",
    rating: "4.8",
    category: "Design",
    path: "/allCourses",
  },
  "Data & AI": {
    title: "Python Data Science & Machine Learning",
    desc: "Dive into Python, Pandas, AI models, and real-world data analytics.",
    duration: "10 Weeks",
    rating: "4.9",
    category: "Data & AI",
    path: "/allCourses",
  },
  Marketing: {
    title: "Digital Marketing & Brand Growth",
    desc: "Master SEO, Content Strategy, Performance Ads, and Social Media Growth.",
    duration: "6 Weeks",
    rating: "4.7",
    category: "Marketing",
    path: "/allCourses",
  },
};

const CourseFinder = () => {
  const [currentStep, setCurrentStep] = useState(0); // 0 = Banner, 1-3 = Quiz, 4 = Result
  const [answers, setAnswers] = useState({});
  const navigate = useNavigate();

  const handleSelectOption = (key, value) => {
    const updatedAnswers = { ...answers, [key]: value };
    setAnswers(updatedAnswers);

    if (currentStep < quizQuestions.length) {
      setCurrentStep(currentStep + 1);
    } else {
      setCurrentStep(4); // Move to Result View
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setAnswers({});
  };

  const selectedCategory = answers.category || "Web Development";
  const recommendation = recommendedCourseData[selectedCategory] || recommendedCourseData["Web Development"];

  return (
    <section className="mx-auto px-4 sm:px-8 py-12 max-w-7xl">
      <div className="relative bg-slate-900 shadow-2xl p-6 sm:p-10 md:p-12 border border-slate-800 rounded-3xl overflow-hidden">
        {/* Decorative Background Glows */}
        <div className="top-0 right-0 absolute bg-teal-500/10 blur-3xl rounded-full w-96 h-96 pointer-events-none" />
        <div className="-bottom-10 -left-10 absolute bg-emerald-500/10 blur-2xl rounded-full w-80 h-80 pointer-events-none" />

        {/* STEP 0: INITIAL BANNER */}
        {currentStep === 0 && (
          <div className="z-10 relative flex md:flex-row flex-col justify-between items-center gap-8">
            <div className="space-y-4 max-w-2xl md:text-left text-center">
              <span className="inline-flex items-center gap-2 bg-teal-500/10 px-4 py-1.5 border border-teal-500/20 rounded-full font-bold text-teal-400 text-xs uppercase tracking-wider">
                <FaCompass className="animate-spin-slow" /> Interactive Course Finder
              </span>
              <h2 className="font-extrabold text-white text-3xl sm:text-4xl leading-tight tracking-tight">
                Not sure where to start? <br />
                <span className="bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400 text-transparent">
                  Take a 1-minute career quiz
                </span>{" "}
                to find your ideal path!
              </h2>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                Answer 3 quick questions about your career goals and experience, and our AI-matching system will suggest the exact course tailored for you.
              </p>
            </div>

            <div className="shrink-0">
              <button
                onClick={() => setCurrentStep(1)}
                className="group flex items-center gap-3 bg-gradient-to-r from-teal-500 hover:from-teal-400 to-emerald-500 hover:to-emerald-400 shadow-lg shadow-teal-500/25 px-8 py-4 rounded-2xl font-extrabold text-white text-base active:scale-95 transition-all cursor-pointer"
              >
                Start Quiz Now
                <FaArrowRight className="transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 1 to 3: QUIZ QUESTIONS */}
        {currentStep >= 1 && currentStep <= 3 && (
          <div className="z-10 relative space-y-6 mx-auto max-w-2xl">
            {/* Progress Bar */}
            <div className="flex justify-between items-center mb-2">
              <span className="font-bold text-slate-400 text-xs uppercase tracking-wider">
                Question {currentStep} of 3
              </span>
              <span className="font-bold text-teal-400 text-xs">
                {Math.round((currentStep / 3) * 100)}% Completed
              </span>
            </div>
            <div className="bg-slate-800 rounded-full w-full h-2 overflow-hidden">
              <div
                className="bg-gradient-to-r from-teal-500 to-emerald-400 h-full transition-all duration-300"
                style={{ width: `${(currentStep / 3) * 100}%` }}
              />
            </div>

            {/* Question Card */}
            <div className="pt-4">
              <h3 className="font-bold text-white text-xl sm:text-2xl">
                {quizQuestions[currentStep - 1].question}
              </h3>
              <div className="space-y-3 mt-6">
                {quizQuestions[currentStep - 1].options.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() =>
                      handleSelectOption(
                        currentStep === 1
                          ? "category"
                          : currentStep === 2
                          ? "level"
                          : "commitment",
                        opt.category || opt.level || opt.commitment
                      )
                    }
                    className="group flex justify-between items-center bg-slate-800/80 hover:bg-slate-800 p-4 border border-slate-700/70 hover:border-teal-500/50 rounded-2xl w-full font-medium text-slate-200 hover:text-white text-sm text-left transition-all cursor-pointer"
                  >
                    <span>{opt.label}</span>
                    <FaArrowRight className="opacity-0 group-hover:opacity-100 text-slate-500 group-hover:text-teal-400 transition-all group-hover:translate-x-1" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* STEP 4: RECOMMENDATION RESULT */}
        {currentStep === 4 && (
          <div className="z-10 relative space-y-6 mx-auto max-w-3xl text-center">
            <div className="inline-flex justify-center items-center bg-emerald-500/10 p-3 rounded-2xl text-emerald-400">
              <FaCheckCircle size={32} />
            </div>

            <div className="space-y-2">
              <span className="font-bold text-teal-400 text-xs uppercase tracking-wider">
                Perfect Match Found!
              </span>
              <h3 className="font-extrabold text-white text-2xl sm:text-3xl">
                Recommended Path: {recommendation.title}
              </h3>
              <p className="mx-auto max-w-lg text-slate-400 text-sm">
                Based on your preference for <span className="font-semibold text-teal-400">{selectedCategory}</span> ({answers.level || "All Levels"}), this course fits your learning speed best!
              </p>
            </div>

            {/* Course Card Preview */}
            <div className="flex sm:flex-row flex-col justify-between items-start sm:items-center gap-4 bg-slate-800/90 p-6 border border-slate-700/80 rounded-2xl text-left">
              <div className="space-y-2">
                <span className="bg-teal-500/20 px-3 py-1 rounded-lg font-semibold text-teal-300 text-xs">
                  {recommendation.category}
                </span>
                <h4 className="font-bold text-white text-lg">
                  {recommendation.title}
                </h4>
                <p className="max-w-md text-slate-400 text-xs">
                  {recommendation.desc}
                </p>
                <div className="flex items-center gap-4 pt-2 font-medium text-slate-300 text-xs">
                  <span className="flex items-center gap-1">
                    <FaClock className="text-teal-400" /> {recommendation.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaStar className="text-amber-400" /> {recommendation.rating} Rating
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-2 w-full sm:w-auto shrink-0">
                <button
                  onClick={() => navigate(recommendation.path)}
                  className="bg-teal-500 hover:bg-teal-400 px-6 py-3 rounded-xl font-bold text-white text-xs text-center transition cursor-pointer"
                >
                  Explore Course
                </button>
                <button
                  onClick={handleReset}
                  className="flex justify-center items-center gap-1.5 hover:bg-slate-700/50 px-4 py-2 rounded-xl text-slate-400 hover:text-white text-xs transition cursor-pointer"
                >
                  <FaRedo size={12} /> Retake Quiz
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CourseFinder;