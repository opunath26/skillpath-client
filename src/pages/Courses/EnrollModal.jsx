import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthProvider.jsx";
import { useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaImage, FaCreditCard, FaLock } from "react-icons/fa";

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
    paymentOption: "",
  });

  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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

    const enrollmentData = {
      courseId: course._id,
      courseTitle: course.title,
      price: course.price,
      studentEmail: formData.email,
      fullName: formData.fullName,
      phone: formData.phone,
      address: formData.address,
      photoUrl: course.thumbnail || course.image, // Corrected key
      paymentOption: formData.paymentOption,
      createdAt: new Date(),
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

  return (
    <div className="bg-slate-50 px-4 py-12 min-h-screen">
      <div className="bg-white shadow-2xl mx-auto border border-slate-100 rounded-[2.5rem] max-w-5xl overflow-hidden">
        <div className="grid lg:grid-cols-5">
          
          {/* Left Side: Course Summary */}
          <div className="lg:col-span-2 bg-slate-900 p-8 md:p-12 text-white">
            <h4 className="mb-4 font-bold text-[#0D9488] text-xs uppercase tracking-widest">Enrollment Summary</h4>
            <h2 className="mb-6 font-black text-2xl md:text-3xl leading-tight">
              {course.title}
            </h2>
            
            <div className="space-y-6">
                <img src={course.image || course.thumbnail} alt="" className="border border-white/10 rounded-2xl w-full h-40 object-cover" />
                
                <div className="flex justify-between items-center py-4 border-white/10 border-b">
                    <span className="text-slate-400">Instructor</span>
                    <span className="font-semibold">{course.instructorName}</span>
                </div>
                
                <div className="flex justify-between items-center py-4 border-white/10 border-b">
                    <span className="text-slate-400">Total Price</span>
                    <span className="font-black text-[#0D9488] text-2xl">৳{course.price}</span>
                </div>
            </div>

            <div className="bg-white/5 mt-12 p-6 border border-white/5 rounded-2xl">
                <div className="flex items-center gap-3 text-slate-300 text-sm">
                    <FaLock className="text-[#0D9488]" />
                    <span>Secure Enrollment Process</span>
                </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="lg:col-span-3 p-8 md:p-12">
            <h3 className="mb-8 font-bold text-slate-800 text-2xl">Personal Information</h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="gap-5 grid md:grid-cols-2">
                {/* Full Name */}
                <div className="relative">
                  <FaUser className="top-1/2 left-4 absolute text-slate-400 -translate-y-1/2" />
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="bg-slate-50 py-3.5 pr-4 pl-12 border border-slate-200 focus:border-[#0D9488] rounded-xl outline-none focus:ring-[#0D9488] focus:ring-2 w-full transition-all"
                  />
                </div>

                {/* Email */}
                <div className="relative">
                  <FaEnvelope className="top-1/2 left-4 absolute text-slate-400 -translate-y-1/2" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    readOnly
                    className="bg-slate-100 py-3.5 pr-4 pl-12 border border-slate-200 rounded-xl outline-none w-full text-slate-500 cursor-not-allowed"
                  />
                </div>
              </div>

              <div className="gap-5 grid md:grid-cols-2">
                {/* Phone */}
                <div className="relative">
                  <FaPhone className="top-1/2 left-4 absolute text-slate-400 -translate-y-1/2" />
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="bg-slate-50 py-3.5 pr-4 pl-12 border border-slate-200 focus:border-[#0D9488] rounded-xl outline-none focus:ring-[#0D9488] focus:ring-2 w-full transition-all"
                  />
                </div>

                {/* Payment Option */}
                <div className="relative">
                  <FaCreditCard className="top-1/2 left-4 absolute text-slate-400 -translate-y-1/2" />
                  <select
                    name="paymentOption"
                    value={formData.paymentOption}
                    onChange={handleChange}
                    required
                    className="bg-slate-50 py-3.5 pr-4 pl-12 border border-slate-200 focus:border-[#0D9488] rounded-xl outline-none focus:ring-[#0D9488] focus:ring-2 w-full transition-all appearance-none cursor-pointer"
                  >
                    <option value="">Select Payment</option>
                    <option value="Credit Card">Credit Card</option>
                    <option value="Bkash">Bkash</option>
                    <option value="Nagad">Nagad</option>
                  </select>
                </div>
              </div>

              {/* Address */}
              <div className="relative">
                <FaMapMarkerAlt className="top-4 left-4 absolute text-slate-400" />
                <textarea
                  name="address"
                  placeholder="Billing Address"
                  rows="3"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  className="bg-slate-50 py-3.5 pr-4 pl-12 border border-slate-200 focus:border-[#0D9488] rounded-xl outline-none focus:ring-[#0D9488] focus:ring-2 w-full transition-all resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className={`w-full py-4 rounded-xl font-black text-lg transition-all shadow-xl active:scale-95 flex justify-center items-center gap-2 ${
                  submitting ? "bg-slate-300 cursor-not-allowed" : "bg-[#0D9488] hover:bg-[#0b7a6f] text-white shadow-[#0D9488]/20"
                }`}
              >
                {submitting ? "Processing..." : "Confirm Enrollment"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnrollModal;