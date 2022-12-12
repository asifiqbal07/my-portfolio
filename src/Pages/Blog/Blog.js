import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import CS from '../../assets/Maintenance.jpg'

const Blog = () => {
    return (
        <div>
            <Navbar></Navbar>
            <img className='lg:w-full' src={CS} alt="" />
            <Footer></Footer>
        </div>
    );
};

export default Blog;