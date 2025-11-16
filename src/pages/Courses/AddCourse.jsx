import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthProvider";
import { toast } from "react-hot-toast";

const AddCourse = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      title: e.target.title.value,
      category: e.target.category.value,
      description: e.target.description.value,
      thumbnail: e.target.image.value,
      price: e.target.price.value, 
      duration: e.target.duration.value,
      instructorName: user?.email || "unknown",
    };

    fetch("http://localhost:3000/courses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Course Added:", data);
        toast.success("✅ Course added successfully!", {
          position: "top-center",
          duration: 3000,
        });
        navigate("/dashboard");
      })
      .catch((err) => {
        console.error("Error:", err);
        toast.error("❌ Failed to add course", {
          position: "top-center",
          duration: 3000,
        });
      });
  };

  return (
    <div className="flex justify-center items-center bg-gray-100 min-h-screen">
      <div className="bg-white shadow-lg p-8 rounded-2xl w-full max-w-lg">
        <h2 className="mb-6 font-bold text-primary text-2xl text-center">
          Add New Course
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Title */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Title
            </label>
            <input
              type="text"
              name="title"
              placeholder="Enter course title"
              className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full"
              required
            />
          </div>

          {/* Category */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Category
            </label>
            <select
              name="category"
              className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full"
              required
            >
              <option value="">Select Category</option>
              <option value="Web Development">Web Development</option>
              <option value="Career">Career</option>
              <option value="Management">Management</option>
              <option value="Soft Skills">Soft Skills</option>
              <option value="Wellbeing">Wellbeing</option>
              <option value="Marketing">Marketing</option>
              <option value="Language">Language</option>
              <option value="Multimedia">Multimedia</option>
              <option value="Design">Design</option>
            </select>
          </div>

          {/* Description */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Description
            </label>
            <textarea
              name="description"
              placeholder="Write course description..."
              rows="4"
              className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full"
              required
            ></textarea>
          </div>

          {/* Thumbnail */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Thumbnail URL
            </label>
            <input
              type="text"
              name="image"
              placeholder="Enter image URL"
              className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full"
              required
            />
          </div>

          {/* Price */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Price
            </label>
            <input
              type="number"
              name="price"
              placeholder="Enter course price"
              className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full"
              required
            />
          </div>

          {/* Duration */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Duration
            </label>
            <input
              type="text"
              name="duration"
              placeholder="Enter course duration (e.g., 5 weeks)"
              className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full"
              required
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 py-2 rounded-lg w-full font-semibold text-white transition duration-300"
          >
            Add Course
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCourse;
