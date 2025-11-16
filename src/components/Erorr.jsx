import React from 'react';
import { Link } from 'react-router';

const Error = () => {
    return (
        <div className="flex flex-col justify-center items-center bg-gray-100 min-h-screen">
            <h1 className="font-extrabold text-red-500 text-9xl">404</h1>
            <p className="mt-4 font-semibold text-gray-700 text-2xl md:text-3xl">
                Oops! Page not found
            </p>
            <p className="mt-2 text-gray-500">
                The page you are looking for does not exist.
            </p>
            <Link
                to="/"
                className="bg-gradient-to-r from-[#39b8ad] hover:from-[#2ea99f] to-[#2ea99f] hover:to-[#39b8ad] mt-6 px-6 py-3 rounded-lg text-white transition"
            >
                Go Back Home
            </Link>
        </div>
    );
};

export default Error;
