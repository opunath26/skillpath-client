import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../pages/Home/Navbar';
import Footer from '../components/Footer';
import { Toaster } from 'react-hot-toast';

const RootLayout = () => {
    return (
        <div className='mx-auto max-w-7xl'>
            <Navbar></Navbar>
            <div className='mt-4'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>

            <Toaster />
        </div>
    );
};

export default RootLayout;