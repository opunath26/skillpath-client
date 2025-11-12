// import React, { useState } from "react";
import React, { use } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { form } from "framer-motion/client";

const AddCourse = () => {

    const { user } = use(AuthContext)
    

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const formData = {
            title: e.target.title.value,
            category: e.target.category.value,
            description: e.target.description.value,
            thumbnail: e.target.thumbnail.value,
            price: 500,
            instructorName: user.email
        };

        fetch('http://localhost:3000/courses', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    });
};

//   const [formData, setFormData] = useState({
//     name: "",
//     category: "",
//     description: "",
//     thumbnail: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Course Data:", formData);
//     // এখানে axios.post দিয়ে backend এ পাঠানো যাবে
//   };

  return (
    <div className="flex justify-center items-center bg-gray-100 min-h-screen">
      <div className="bg-white shadow-lg p-8 rounded-2xl w-full max-w-lg">
        <h2 className="mb-6 font-bold text-primary text-2xl text-center">
          Add New Course
        </h2>

        <form onSubmit={handleSubmit} className="space-y-2">
          {/* Name */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Title
            </label>
            <input
              type="text"
              name="title"
              placeholder="Enter course name"
            //   value={formData.name}
            //   onChange={handleChange}
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
            //   value={formData.category}
            //   onChange={handleChange}
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
            //   value={formData.description}
            //   onChange={handleChange}
              rows="4"
              className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full"
              required
            ></textarea>
          </div>

          {/* Thumbnail URL */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Thumbnail URL
            </label>
            <input
              type="text"
              name="thumbnail"
              placeholder="Enter image URL"
            //   value={formData.thumbnail}
            //   onChange={handleChange}
              className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full"
              required
            />
          </div>

          {/* Submit Button */}
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
