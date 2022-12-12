import React from 'react';
import { FaTwitter, FaLinkedin, FaGithub, FaBehanceSquare } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='mt-10'>
            <footer className="footer items-center p-3 bg-neutral text-neutral-content lg:px-40 lg:flex justify-between">
                <div className="items-center ">
                    <h1 className='text-xl text-center lg:text-start'>Md Asif Iqbal</h1>
                    <p className='text-center lg:text-start'>Copyright © 2022 - All right reserved</p>
                </div>
                <div className="flex justify-around items-center text-2xl mx-auto">
                    <a target='blank' className='px-4 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300' href="https://www.linkedin.com/in/iqbal07asif/"><FaLinkedin className='shadow'></FaLinkedin></a>
                    <a target='blank' className='px-4 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300' href="https://github.com/asifiqbal07"><FaGithub className='shadow'></FaGithub></a>
                    <a target='blank' className='px-4 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300' href="https://twitter.com/iqbal07asif"><FaTwitter className='shadow'></FaTwitter></a>
                    <a target='blank' className='px-4 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300' href="https://www.behance.net/iqbalasif07"><FaBehanceSquare className='shadow'></FaBehanceSquare></a>
                </div>
            </footer>
        </div>
    );
};

export default Footer;