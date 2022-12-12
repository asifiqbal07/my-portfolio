import React from 'react';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import fl1 from '../../../../assets/Screenshot (84).png'
import fl2 from '../../../../assets/Screenshot (83).png'
import fl3 from '../../../../assets/Screenshot (85).png'
import Footer from '../../../Shared/Footer/Footer';
import Navbar from '../../../Shared/Navbar/Navbar';

const FLink = () => {
    return (
        <section>
            <Navbar></Navbar>
            <div className="lg:mx-40 mx-auto mt-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-5">
                    <div className="lg:col-span-1 w-full border">
                        <Carousel autoPlay={true} infiniteLoop={true}>
                            <div>
                                <img src={fl1} alt='' />
                            </div>
                            <div>
                                <img src={fl2} alt='' />
                            </div>
                            <div>
                                <img src={fl3} alt='' />
                            </div>
                        </Carousel>
                    </div>

                    <div className="lg:col-span-1 w-full ">
                        <div className="flex items-center justify-between">
                            <h1 className="text-3xl font-bold  mx-auto lg:mx-0">Fast Link</h1>
                        </div>
                        <p className=" my-4 text-center lg:text-start">Fast Link internet service providing website. Where customers can easily enroll any package or the can make their own custom package.</p>
                        <div className=" flex items-center justify-center lg:justify-start gap-5 my-4">
                            <a
                                href='https://fast-link-fdad4.web.app/'
                                className=" bg-[#3078fb] py-2 rounded  uppercase text-xs px-5 text-white block"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Live Website
                            </a>
                            <a
                                href='https://github.com/asifiqbal07/a11-fast-link'
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
                            <li>Firebase Authentication</li>
                            <li>NodeJS authentication with JWT</li>
                            <li>User and Admin Dashboard</li>
                        </ul>
                        <h2 className=" font-bold  uppercase text-center lg:text-start">Technology:</h2>
                        <ul className=" my-3 flex flex-col gap-3 text-center lg:text-start">
                            <li>React JS</li>
                            <li>React Router Dom</li>
                            <li>Tailwind</li>
                            <li>daisyUI</li>
                            <li>MongoDB</li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </section>
    );
};

export default FLink;