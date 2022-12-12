import React from 'react';
import { FaArrowRight, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import lz from '../../../assets/LZ.png'
import fl from '../../../assets/FL.png'
import su from '../../../assets/SU.png'
import { FiExternalLink } from "react-icons/fi";

const Projects = () => {
    return (
        <div id='projects' className=' grid lg:grid-cols-3 gap-10 md:grid-cols-2 m-5 lg:m-0 lg:mx-40 lg:mt-10 '>
            <div className="card card-compact bg-base-100 rounded-none ">
                <div className="card-body ">
                    <h4 className="card-title text-[#3078fb]">MY PROJECTS</h4>
                    <h1 className='text-4xl font-bold justify-center'>Check Some Interesting Projects of mine!</h1>
                    
                    {/* <p className='mt-4 text-lg'>Best internet packages in your area which provides fully dedicated, super fast, cost-effective, secured internet connection.</p> */}
                    {/* <Link to='/packages'><button className="btn bg-[#3078fb] border-0 rounded-none hover:bg-white hover:text-[#3078fb] hover:border-[1px] hover:border-[#3078fb] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300">Check All Packages </button></Link> */}
                </div>
            </div>

            <div>
                <div className="card card-compact  bg-base-100 shadow-xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 rounded-none">
                    <figure>
                        <img className='max-h-48 w-full h-[230px]' src={lz} alt="" />
                    </figure>
                    <div className="card-body">
                        <div className='flex items-center justify-between'>
                            <h2 className="font-semibold text-xl">Laptop Zone</h2>
                            <div className='flex items-center'>
                                <a target='blank' className='px-4 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300' href="https://github.com/asifiqbal07/a12-laptop-zone"><FaGithub className='text-xl'></FaGithub></a>
                                <a target='blank' className='px-4 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300' href="https://laptop-zone-3f676.web.app/"><FiExternalLink className='text-xl'></FiExternalLink></a>                               
                            </div>
                        </div>

                        <Link to='/project/laptopzone'><span className='flex items-center text-[#3078fb] justify-center font-semibold mt-4 hover:text-lg'>Explore More <FaArrowRight className='ml-5 mt-1' /></span></Link>
                    </div>
                </div>
            </div>
            <div>
                <div className="card card-compact  bg-base-100 shadow-xl p-4  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 rounded-none">
                    <figure>
                        <img className='max-h-48 w-full' src={fl} alt="" />
                    </figure>
                    <div className="card-body">
                        <div className='flex items-center justify-between'>
                            <h2 className="font-semibold text-xl">Fast Link</h2>
                            <div className='flex items-center'>
                                <a target='blank' className='px-4 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300' href="https://github.com/asifiqbal07/a11-fast-link"><FaGithub className='text-xl'></FaGithub></a>
                                <a target='blank' className='px-4 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300' href="https://fast-link-fdad4.web.app/"><FiExternalLink className='text-xl'></FiExternalLink></a>                               
                            </div>
                        </div>

                        <Link to='/project/fastlink'><span className='flex items-center text-[#3078fb] justify-center font-semibold mt-4 hover:text-lg'>Explore More <FaArrowRight className='ml-5 mt-1' /></span></Link>
                    </div>
                </div>
            </div>
            <div>
                <div className="card card-compact  bg-base-100 shadow-xl p-4  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 rounded-none">
                    <figure>
                        <img className='max-h-48 w-full' src={su} alt="" />
                    </figure>
                    <div className="card-body">
                        <div className='flex items-center justify-between'>
                            <h2 className="font-semibold text-xl">Skill Up</h2>
                            <div className='flex items-center'>
                                <a target='blank' className='px-4 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300' href="https://github.com/asifiqbal07/a10-skill-up"><FaGithub className='text-xl'></FaGithub></a>
                                <a target='blank' className='px-4 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300' href="https://skill-up-51282.web.app/"><FiExternalLink className='text-xl'></FiExternalLink></a>                               
                            </div>
                        </div>

                        <Link to='/project/skillup'><span className='flex items-center justify-center font-semibold mt-4 hover:text-lg'>Explore More <FaArrowRight className='ml-5 mt-1' /></span></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;