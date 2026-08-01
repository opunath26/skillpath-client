import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPaperPlane } from "react-icons/fa";
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="bg-slate-900 pt-16 pb-8 text-slate-300">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="gap-8 lg:gap-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-12">
          
          {/* 1. About / Logo */}
          <div className="space-y-4">
            <h2 className="font-extrabold text-white text-2xl tracking-tight">
              Skill <span className="text-[#0D9488]">Path</span>
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              Skill Path is your go-to platform for learning and growth. Explore expert-led courses and achieve your career goals with hands-on learning.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-2.5 pt-2">
              {[
                { icon: <FaFacebookF />, href: "#" },
                { icon: <FaTwitter />, href: "#" },
                { icon: <FaInstagram />, href: "#" },
                { icon: <FaLinkedinIn />, href: "#" },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="flex justify-center items-center bg-slate-800 hover:bg-[#0D9488] rounded-xl w-9 h-9 text-slate-300 hover:text-white transition-all duration-300"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* 2. Quick Links */}
          <div>
            <h3 className="mb-4 font-bold text-white text-lg">Quick Links</h3>
            <ul className="space-y-2.5 text-sm">
              {["Home", "All Courses", "About Us", "Register", "Login"].map((link, idx) => (
                <li key={idx}>
                  <a
                    href={`/${link.toLowerCase().replace(/\s+/g, "")}`}
                    className="hover:text-[#0D9488] transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Contact Info */}
          <div>
            <h3 className="mb-4 font-bold text-white text-lg">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <HiOutlineLocationMarker className="mt-0.5 w-5 h-5 text-[#0D9488] shrink-0" />
                <span>123 Skill Street, Chittagong, Bangladesh</span>
              </li>
              <li className="flex items-center gap-3">
                <HiOutlineMail className="w-5 h-5 text-[#0D9488] shrink-0" />
                <span>info@skillpath.com</span>
              </li>
              <li className="flex items-center gap-3">
                <HiOutlinePhone className="w-5 h-5 text-[#0D9488] shrink-0" />
                <span>+880 123 456 789</span>
              </li>
            </ul>
          </div>

          {/* 4. Newsletter Subscription */}
          <div>
            <h3 className="mb-4 font-bold text-white text-lg">Subscribe</h3>
            <p className="mb-4 text-slate-400 text-sm">
              Subscribe to our newsletter to get the latest updates and news.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="relative">
              <input
                type="email"
                placeholder="Your Email"
                className="bg-slate-800 focus:bg-slate-800/80 px-4 py-3 border border-slate-700/80 focus:border-[#0D9488] rounded-xl focus:outline-none w-full text-white text-sm transition-all placeholder-slate-500"
              />
              <button
                type="submit"
                className="top-1.5 right-1.5 absolute flex justify-center items-center bg-[#0D9488] hover:bg-teal-600 p-2.5 rounded-lg text-white transition-colors duration-200"
              >
                <FaPaperPlane className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>

        </div>

        {/* Copyright */}
        <div className="flex sm:flex-row flex-col justify-between items-center gap-4 pt-8 border-slate-800 border-t text-xs sm:text-left text-center">
          <p>&copy; {new Date().getFullYear()} Skill Path. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;