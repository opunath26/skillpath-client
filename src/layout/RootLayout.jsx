import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../pages/Home/Navbar';
import Footer from '../components/Footer';

const RootLayout = () => {
    return (
        <div className='mx-auto max-w-7xl'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;