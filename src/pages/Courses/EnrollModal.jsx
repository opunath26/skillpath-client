import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthProvider.jsx";
import { useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLock,
  FaCreditCard,
  FaMobileAlt,
  FaCheckCircle,
  FaSpinner,
  FaChalkboardTeacher,
} from "react-icons/fa";

const EnrollModal = () => {
  const course = useLoaderData();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: user?.displayName || "",
    email: user?.email || "",
    phone: "",
    address: "",
    photoUrl: user?.photoURL || "",
    paymentOption: "Bkash",
  });

  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePaymentSelect = (method) => {
    setFormData({ ...formData, paymentOption: method });
  };

  const showToast = (icon, title) => {
    Swal.fire({
      position: "top-end",
      icon: icon,
      title: title,
      showConfirmButton: false,
      timer: 2000,
      toast: true,
      background: icon === "success" ? "#0D9488" : "#ef4444",
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

    if (!formData.paymentOption) {
      showToast("error", "Please select a payment method!");
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
      photoUrl: course.thumbnail || course.image,
      paymentOption: formData.paymentOption,
      createdAt: new Date().toISOString(),
    };

    try {
      setSubmitting(true);
      const res = await fetch("https://skill-path-server-five.vercel.app/enrollments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
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
      showToast("error", "Enrollment failed! Try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const paymentMethods = [
    { id: "Bkash", name: "bKash", icon: FaMobileAlt, color: "text-pink-600", bg: "bg-pink-50 border-pink-200" },
    { id: "Nagad", name: "Nagad", icon: FaMobileAlt, color: "text-orange-600", bg: "bg-orange-50 border-orange-200" },
    { id: "Credit Card", name: "Card", icon: FaCreditCard, color: "text-blue-600", bg: "bg-blue-50 border-blue-200" },
  ];

  return (
    <div className="flex justify-center items-center bg-slate-50/50 px-4 py-10 min-h-screen">
      <div className="bg-white/90 shadow-2xl backdrop-blur-md mx-auto border border-slate-200/80 rounded-3xl max-w-5xl overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-5">
          
          {/* Left Side: Course Summary Card */}
          <div className="relative flex flex-col justify-between lg:col-span-2 bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900 p-8 md:p-10 overflow-hidden text-white">
            <div className="top-0 right-0 absolute bg-teal-500/10 blur-3xl rounded-full w-64 h-64 pointer-events-none" />

            <div>
              <div className="inline-flex items-center gap-2 bg-teal-500/10 backdrop-blur-md mb-6 px-3 py-1.5 border border-teal-500/20 rounded-full">
                <span className="bg-teal-400 rounded-full w-2 h-2 animate-pulse" />
                <span className="font-semibold text-teal-300 text-xs uppercase tracking-wider">Enrollment Checkout</span>
              </div>

              <h2 className="mb-4 font-extrabold text-2xl md:text-3xl leading-tight">
                {course?.title || "Course Enrollment"}
              </h2>

              <div className="shadow-md my-6 border border-white/10 rounded-2xl aspect-video overflow-hidden">
                <img
                  src={course?.image || course?.thumbnail || "https://i.ibb.co/mJR9n0K/user-placeholder.png"}
                  alt={course?.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-3 pt-2 border-white/10 border-t">
                <div className="flex justify-between items-center text-sm">
                  <span className="flex items-center gap-2 text-slate-300">
                    <FaChalkboardTeacher className="text-teal-400" /> Instructor
                  </span>
                  <span className="font-medium text-slate-100">{course?.instructorName || "N/A"}</span>
                </div>

                <div className="flex justify-between items-center pt-3 border-white/10 border-t text-sm">
                  <span className="text-slate-300">Total Course Fee</span>
                  <span className="font-black text-teal-400 text-2xl">৳{course?.price || "0"}</span>
                </div>
              </div>
            </div>

            {/* Trust Badge */}
            <div className="bg-white/5 backdrop-blur-sm mt-8 p-4 border border-white/10 rounded-2xl">
              <div className="flex items-center gap-3 text-slate-300 text-xs">
                <div className="flex justify-center items-center bg-teal-500/20 rounded-xl w-8 h-8 shrink-0">
                  <FaLock className="text-teal-400" />
                </div>
                <div>
                  <p className="font-bold text-white">Encrypted & Secure</p>
                  <p className="text-slate-400">Your information is fully protected.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="lg:col-span-3 p-6 md:p-10">
            <div className="mb-6">
              <h3 className="font-extrabold text-slate-800 text-2xl">Student Information</h3>
              <p className="text-slate-500 text-xs md:text-sm">Please provide your details to complete enrollment</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Full Name & Email */}
              <div className="gap-4 grid grid-cols-1 md:grid-cols-2">
                <div>
                  <label className="block mb-1 font-bold text-slate-700 text-xs uppercase tracking-wider">
                    Full Name
                  </label>
                  <div className="relative">
                    <FaUser className="top-1/2 left-3.5 absolute text-slate-400 -translate-y-1/2" />
                    <input
                      type="text"
                      name="fullName"
                      placeholder="Your Full Name"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="bg-slate-50 py-3 pr-4 pl-10 border border-slate-200 focus:border-teal-600 rounded-xl focus:outline-none focus:ring-4 focus:ring-teal-600/10 w-full text-sm transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block mb-1 font-bold text-slate-700 text-xs uppercase tracking-wider">
                    Email Address
                  </label>
                  <div className="relative">
                    <FaEnvelope className="top-1/2 left-3.5 absolute text-slate-400 -translate-y-1/2" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      readOnly
                      className="bg-slate-100 py-3 pr-4 pl-10 border border-slate-200 rounded-xl w-full text-slate-500 text-sm cursor-not-allowed"
                    />
                  </div>
                </div>
              </div>

              {/* Phone Number */}
              <div>
                <label className="block mb-1 font-bold text-slate-700 text-xs uppercase tracking-wider">
                  Phone Number
                </label>
                <div className="relative">
                  <FaPhone className="top-1/2 left-3.5 absolute text-slate-400 -translate-y-1/2" />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="017XXXXXXXX"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="bg-slate-50 py-3 pr-4 pl-10 border border-slate-200 focus:border-teal-600 rounded-xl focus:outline-none focus:ring-4 focus:ring-teal-600/10 w-full text-sm transition-all"
                  />
                </div>
              </div>

              {/* Address */}
              <div>
                <label className="block mb-1 font-bold text-slate-700 text-xs uppercase tracking-wider">
                  Billing Address
                </label>
                <div className="relative">
                  <FaMapMarkerAlt className="top-3.5 left-3.5 absolute text-slate-400" />
                  <textarea
                    name="address"
                    placeholder="Enter your full address"
                    rows="2"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    className="bg-slate-50 py-2.5 pr-4 pl-10 border border-slate-200 focus:border-teal-600 rounded-xl focus:outline-none focus:ring-4 focus:ring-teal-600/10 w-full text-sm transition-all resize-none"
                  ></textarea>
                </div>
              </div>

              {/* Payment Method Selector Cards */}
              <div className="pt-2">
                <label className="block mb-2 font-bold text-slate-700 text-xs uppercase tracking-wider">
                  Select Payment Method
                </label>
                <div className="gap-3 grid grid-cols-3">
                  {paymentMethods.map((method) => {
                    const Icon = method.icon;
                    const isSelected = formData.paymentOption === method.id;
                    return (
                      <button
                        key={method.id}
                        type="button"
                        onClick={() => handlePaymentSelect(method.id)}
                        className={`p-3 rounded-2xl border text-center transition-all flex flex-col items-center gap-1.5 cursor-pointer relative ${
                          isSelected
                            ? "border-teal-600 bg-teal-50/60 shadow-sm ring-2 ring-teal-600/20"
                            : "border-slate-200 bg-slate-50 hover:bg-slate-100/80"
                        }`}
                      >
                        {isSelected && (
                          <FaCheckCircle className="top-1.5 right-1.5 absolute text-teal-600 text-xs" />
                        )}
                        <Icon className={`text-xl ${method.color}`} />
                        <span className="font-bold text-slate-800 text-xs">{method.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={submitting}
                className="flex justify-center items-center gap-2 bg-teal-600 hover:bg-teal-700 active:bg-teal-800 disabled:opacity-70 shadow-lg shadow-teal-600/20 mt-4 py-3.5 rounded-2xl w-full font-extrabold text-white text-base active:scale-[0.99] transition-all cursor-pointer disabled:cursor-not-allowed"
              >
                {submitting ? (
                  <>
                    <FaSpinner className="text-lg animate-spin" /> Processing...
                  </>
                ) : (
                  `Confirm & Enroll (৳${course?.price || 0})`
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnrollModal;