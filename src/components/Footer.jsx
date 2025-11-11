// Footer.jsx
import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#39b8ad] mt-20 py-10 text-white">
      <div className="gap-8 grid grid-cols-1 md:grid-cols-3 mx-auto px-4 md:px-10 max-w-7xl">
        
        {/* About / Logo */}
        <div className="space-y-4">
          <h2 className="font-bold text-2xl">Skill <span className="text-[#ffdd59]">Path</span></h2>
          <p className="text-gray-100 text-sm">
            Skill Path is your go-to platform for learning and growth. Explore expert-led courses and achieve your goals.
          </p>
          <div className="flex items-center gap-3 mt-2 text-white text-lg">
            <FaFacebookF className="hover:text-[#ffdd59] transition-colors duration-300 cursor-pointer"/>
            <FaTwitter className="hover:text-[#ffdd59] transition-colors duration-300 cursor-pointer"/>
            <FaInstagram className="hover:text-[#ffdd59] transition-colors duration-300 cursor-pointer"/>
            <FaLinkedinIn className="hover:text-[#ffdd59] transition-colors duration-300 cursor-pointer"/>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-2">
          <h3 className="mb-2 font-semibold text-xl">Quick Links</h3>
          <ul className="space-y-1">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/allCourses" className="hover:underline">All Courses</a></li>
            <li><a href="/register" className="hover:underline">Register</a></li>
            <li><a href="/login" className="hover:underline">Login</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-2">
          <h3 className="mb-2 font-semibold text-xl">Contact Us</h3>
          <p className="text-sm">123 Skill Street, Chittagong, Bangladesh</p>
          <p className="text-sm">Email: info@skillpath.com</p>
          <p className="text-sm">Phone: +880 123 456 789</p>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 pt-4 border-white/30 border-t text-gray-100 text-sm text-center">
        &copy; {new Date().getFullYear()} Skill Path. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
