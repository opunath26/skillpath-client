import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { FaUserGraduate, FaClock, FaSearch } from "react-icons/fa";

const AllCourses = () => {
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3000/courses")
      .then(res => {
        setCourses(res.data);
        setFilteredCourses(res.data);
        const uniqueCategories = ["All", ...new Set(res.data.map(c => c.category))];
        setCategories(uniqueCategories);
      })
      .catch(err => console.log(err));
  }, []);

  // filter & search logic
  useEffect(() => {
    let updatedCourses = [...courses];
    if (selectedCategory !== "All") {
      updatedCourses = updatedCourses.filter(c => c.category === selectedCategory);
    }
    if (searchQuery.trim()) {
      updatedCourses = updatedCourses.filter(c =>
        c.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    setFilteredCourses(updatedCourses);
  }, [selectedCategory, searchQuery, courses]);

  return (
    <div className="bg-gray-50 mx-auto px-4 py-10 container">
  {/* Header */}
  <h1 className="mb-8 font-bold text-3xl text-center">
    Explore All Courses
  </h1>

  {/* Filter + Search Section */}
  <div className="flex md:flex-row flex-col justify-between items-center gap-4 mb-8">
    {/* Categories */}
    <div className="flex flex-wrap gap-3">
      {categories.map((cat, index) => (
        <button
          key={index}
          onClick={() => setSelectedCategory(cat)}
          className={`px-4 py-2 rounded-full border transition-all duration-300 ${
            selectedCategory === cat
              ? "bg-teal-500 text-white border-teal-500"
              : "bg-white text-gray-700 border-gray-300 hover:bg-teal-100"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>

    {/* Search Bar */}
    <div className="relative w-full md:w-1/3">
      <input
        type="text"
        placeholder="Search courses..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="py-2 pr-4 pl-10 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-400 w-full"
      />
      <FaSearch className="top-3 left-3 absolute text-gray-400" />
    </div>
  </div>

  {/* Courses Grid */}
  {filteredCourses.length > 0 ? (
    <div className="gap-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
      {filteredCourses.map(course => (
        <div
          key={course._id}
          onClick={() => navigate(`/courseDetails/${course._id}`)}
          className="bg-white shadow-lg hover:shadow-2xl rounded-xl overflow-hidden transition-transform hover:-translate-y-1 duration-300 cursor-pointer"
        >
          <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
          <div className="p-5">
            <h2 className="mb-3 font-semibold text-xl">{course.title}</h2>
            <p className="flex items-center mb-2 text-gray-600">
              <FaClock className="mr-2 text-teal-500" /> Duration: {course.duration}
            </p>
            <p className="flex items-center mb-4 text-gray-600">
              <FaUserGraduate className="mr-2 text-teal-500" /> Students: {course.students?.length || 0}
            </p>
            <p className="mb-4 font-bold text-gray-800">Price: ${course.price}</p>
            <button
              className="py-2 rounded-full w-full font-semibold text-white"
              style={{ backgroundColor: "#39b8ad" }}
            >
              Enroll Now
            </button>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <p className="mt-10 text-gray-500 text-lg text-center">
      No courses found for your search or category.
    </p>
  )}
</div>

  );
};

export default AllCourses;
