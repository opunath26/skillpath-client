import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../pages/Home/Navbar';
import Footer from '../components/Footer';
import { Toaster } from 'react-hot-toast';

const RootLayout = () => {
    return (
        <div className='flex flex-col min-h-screen font-sans'>
            {/* Sticky/Header Navbar */}
            <Navbar />

            {/* Dynamic Pages Render Area */}
            <main className='flex-grow mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-7xl'>
                <Outlet />
            </main>

            {/* Footer */}
            <Footer />

            {/* Toast Notifications */}
            <Toaster position="top-center" reverseOrder={false} />
        </div>
    );
};

export default RootLayout;