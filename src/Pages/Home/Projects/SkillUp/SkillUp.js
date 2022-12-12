import React from 'react';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import su1 from '../../../../assets/Screenshot (86).png'
import su2 from '../../../../assets/Screenshot (87).png'
import su3 from '../../../../assets/Screenshot (88).png'
import Footer from '../../../Shared/Footer/Footer';
import Navbar from '../../../Shared/Navbar/Navbar';

const SkillUp = () => {
    return (
        <section>
            <Navbar></Navbar>
            <div className="lg:mx-40 mx-auto mt-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-5">
                    <div className="lg:col-span-1 w-full border">
                        <Carousel autoPlay={true} infiniteLoop={true}>
                            <div>
                                <img src={su1} alt='' />
                            </div>
                            <div>
                                <img src={su2} alt='' />
                            </div>
                            <div>
                                <img src={su3} alt='' />
                            </div>
                        </Carousel>
                    </div>

                    <div className="lg:col-span-1 w-full ">
                        <div className="flex items-center justify-between">
                            <h1 className="text-3xl font-bold  mx-auto lg:mx-0">Skill Up</h1>
                        </div>
                        <p className=" my-4 text-center lg:text-start">Skill Up is educational courses selling website. Students can easily enroll any courses and improve their skills.</p>
                        <div className=" flex items-center justify-center lg:justify-start gap-5 my-4">
                            <a
                                href='https://skill-up-51282.web.app/'
                                className=" bg-[#3078fb] py-2 rounded  uppercase text-xs px-5 text-white block"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Live Website
                            </a>
                            <a
                                href='https://github.com/asifiqbal07/a10-skill-up'
                                className=" bg-[#3078fb] py-2 rounded  uppercase text-xs px-5 text-white block"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Source Code
                            </a>
                        </div>
                        <h2 className=" font-bold  uppercase text-center lg:text-start">Features:</h2>
                        <ul className=" my-3 flex flex-col gap-3 text-center lg:text-start">
                            <li>CRUD Operation</li>
                            <li>NodeJS authentication with JWT</li>
                            <li>Firebase Authentication</li>
                        </ul>
                        <h2 className=" font-bold  uppercase text-center lg:text-start">Technology:</h2>
                        <ul className=" my-3 flex flex-col gap-3 text-center lg:text-start">
                            <li>React JS</li>
                            <li>React Router Dom</li>
                            <li>Bootstrap</li>
                            <li>ReactBootstrap</li>
                            <li>MongoDB</li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </section>
    );
};

export default SkillUp;