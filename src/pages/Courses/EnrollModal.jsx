import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthProvider.jsx";
import { useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";

const EnrollModal = () => {
  const course = useLoaderData();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: user?.email || "",
    phone: "",
    address: "",
    photoUrl: user?.photoURL || "",
    paymentOption: "",
  });

  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const showToast = (icon, title) => {
    Swal.fire({
      position: "top-center",
      icon: icon,
      title: title,
      showConfirmButton: false,
      timer: 2000,
      toast: true,
      background: icon === "success" ? "#39b8ad" : "#f56565",
      color: "#fff",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      showToast("error", "Please login first!");
      navigate("/login");
      return;
    }

    const enrollmentData = {
      courseId: course._id,
      courseTitle: course.title,
      price: course.price,
      studentEmail: formData.email,
      fullName: formData.fullName,
      phone: formData.phone,
      address: formData.address,
      photoUrl: course.photoUrl,
      paymentOption: formData.paymentOption,
      createdAt: new Date(),
    };

    try {
      setSubmitting(true);
      const res = await fetch("https://skill-path-server-five.vercel.app/enrollments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(enrollmentData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        showToast("success", "Successfully enrolled!");
        navigate("/myCourse");
      } else {
        showToast("error", data.message || "Enrollment failed!");
      }
    } catch (error) {
      console.error(error);
      showToast("error", "Enrollment failed! Try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-white shadow-lg mx-auto mt-10 p-6 rounded-2xl max-w-2xl">
      <h2 className="mb-4 font-bold text-gray-800 text-2xl">
        Enroll in: {course.title}
      </h2>

      <p className="mb-3 text-gray-600">{course.description}</p>
      <p className="mb-3 font-semibold text-gray-700">
        Instructor: {course.instructorName}
      </p>
      <p className="mb-6 font-bold text-[#39b8ad] text-lg">
        Price: ${course.price}
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          required
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-[#39b8ad] focus:ring-2"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-[#39b8ad] focus:ring-2"
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-[#39b8ad] focus:ring-2"
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          required
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-[#39b8ad] focus:ring-2"
        />
        <input
          type="text"
          name="photoUrl"
          placeholder="Photo URL"
          value={formData.photoUrl}
          onChange={handleChange}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-[#39b8ad] focus:ring-2"
        />
        <select
          name="paymentOption"
          value={formData.paymentOption}
          onChange={handleChange}
          required
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-[#39b8ad] focus:ring-2"
        >
          <option value="">Select Payment Option</option>
          <option value="Credit Card">Credit Card</option>
          <option value="Bkash">Bkash</option>
          <option value="Nagad">Nagad</option>
        </select>

        <button
          type="submit"
          disabled={submitting}
          className={`${submitting ? "bg-gray-400" : "bg-[#39b8ad] hover:bg-[#2fa097]"
            } text-white px-6 py-3 rounded-full font-semibold transition-all`}
        >
          {submitting ? "Enrolling..." : "Confirm Enroll"}
        </button>
      </form>
    </div>
  );
};

export default EnrollModal;
