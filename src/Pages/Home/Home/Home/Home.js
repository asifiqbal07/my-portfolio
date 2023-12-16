import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../../Shared/Footer/Footer';
import AboutMe from '../../AboutMe/AboutMe';
import Banner from '../../Banner/Banner';
import Projects from '../../Projects/Projects';
import Skills from '../../Skills/Skills';
import ContactMe from '../ContactMe/ContactMe';

const Home = () => {
    return (
        <div>
            <div className="drawer drawer-end">
                <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* <!-- Page content here --> */}

                    <Banner></Banner>
                    <AboutMe></AboutMe>
                    <hr className='lg:mx-40 font-bold mt-5'/>
                    <Skills></Skills>
                    <hr className='lg:mx-40 font-bold mt-5'/>
                    <Projects></Projects>
                    <hr className='lg:mx-40 font-bold mt-10'/>
                    <ContactMe></ContactMe>
                    <Footer></Footer>

                </div>
                <div className="drawer-side ">
                    <label htmlFor="my-drawer-4" className="drawer-overlay "></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content ">
                        {/* <!-- Sidebar content here --> */}
                        <li className='menu menu-compact dropdown-content my-3 p-2 mr-3 font-semibold border-l-4 border-[#213038] shadow bg-base-100 rounded-md w-full
                        transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 duration-300 hover:bg-white
                        '><a href='#about' className='hover:bg-white'>About Me</a></li>
                        <li className='menu menu-compact dropdown-content my-3 p-2 mr-3 font-semibold border-l-4 border-[#213038] shadow bg-base-100 rounded-md w-full
                         transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 duration-300
                        '><a href='#skills' className='hover:bg-white'>Skills</a></li>
                        <li className='menu menu-compact dropdown-content my-3 p-2 mr-3 font-semibold border-l-4 border-[#213038] shadow bg-base-100 rounded-md w-full
                         transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 duration-300
                        '><a href='#projects' className='hover:bg-white'>Projects</a></li>
                        <li className='menu menu-compact dropdown-content my-3 p-2 mr-3 font-semibold border-l-4 border-[#213038] shadow bg-base-100 rounded-md w-full
                         transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 duration-300
                        '><a href='#contact' className='hover:bg-white'>Contact Me</a></li>
                        
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Home;