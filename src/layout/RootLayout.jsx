import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../pages/Home/Navbar';
import Footer from '../components/Footer';
import { Toaster } from 'react-hot-toast';

const RootLayout = () => {
    return (
        <div className='flex flex-col bg-slate-50/50 min-h-screen font-sans text-slate-800'>
            {/* Sticky/Header Navbar */}
            <Navbar></Navbar>

            {/* Dynamic Pages Render Area */}
            <main className='flex-grow'>
                <Outlet></Outlet>
            </main>

            {/* Footer */}
            <Footer></Footer>

            {/* Toast Notifications */}
            <Toaster position="top-center" reverseOrder={false} />
        </div>
    );
};

export default RootLayout;