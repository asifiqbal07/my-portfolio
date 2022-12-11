import React from 'react';
import banner from '../../../assets/banner.jpg'
import profile from '../../../assets/Asif.png'
import cv from '../../../assets/Asif resume.pdf'
import { FaLinkedin, FaGithub, FaTwitter, FaBehanceSquare, FaReact, FaNodeJs, FaBootstrap, FaFigma, FaDiscord } from "react-icons/fa";
import { HiBars3BottomRight } from "react-icons/hi2";
import { AiFillHtml5, AiFillChrome } from "react-icons/ai";
import { DiCss3, DiVisualstudio, DiIllustrator, DiPhotoshop } from "react-icons/di";
import { TbBrandJavascript } from "react-icons/tb";
import { SiMongodb, SiTailwindcss, SiFirebase, SiNetlify, SiAdobeindesign, SiCanva, SiAdobepremierepro, SiMicrosoftoffice, SiObsstudio, SiAdobeacrobatreader } from "react-icons/si";
import { GiSunflower } from "react-icons/gi";
import { TbBrandBootstrap } from "react-icons/tb";

const Banner = () => {
    return (
        <div>
            <div className="drawer drawer-end">
                <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* <!-- Page content here --> */}

                    <div className='absolute lg:top-10 lg:right-5 h-16 w-16'>
                        <label htmlFor="my-drawer-4" className="drawer-button  btn btn-ghost lg:bg-[#080404]"><HiBars3BottomRight className='lg:text-white text-2xl text-[#080404]'></HiBars3BottomRight></label>
                    </div>
                    <div className=''>
                        <img className='hidden lg:block' src={banner} alt="" />
                    </div>

                    <div className="avatar flex lg:-mt-32">
                        <div className="lg:w-60 w-40 rounded-full mx-auto">
                            <img className='mx-auto' src={profile} alt="" />
                        </div>
                    </div>

                    <div className='text-center mt-3 '>
                        <h1 className='text-3xl'>Md Asif Iqbal</h1>
                        <p className='mt-2 text-lg'>Web Developer</p>
                        <div className='flex items-center justify-center text-2xl mt-3 '>
                            <a target='blank' className='px-4 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300' href="https://www.linkedin.com/in/iqbal07asif/"><FaLinkedin className='shadow'></FaLinkedin></a>
                            <a target='blank' className='px-4 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300' href="https://github.com/asifiqbal07"><FaGithub className='shadow'></FaGithub></a>
                            <a target='blank' className='px-4 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300' href="https://twitter.com/iqbal07asif"><FaTwitter className='shadow'></FaTwitter></a>
                            <a target='blank' className='px-4 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300' href="https://www.behance.net/iqbalasif07"><FaBehanceSquare className='shadow'></FaBehanceSquare></a>
                        </div>
                    </div>

                    {/* Details */}
                    <div className='lg:flex lg:mx-40 my-10 bg-white shadow-sm m-5'>
                        <div className='lg:w-2/5'>
                            <div className=' p-4 flex'>
                                <h4 className='font-semibold mr-4' >Citizenship:</h4>
                                <h5>Bangladesh</h5>

                            </div>
                            <hr className='' />
                            <div className=' p-4 flex'>
                                <h4 className='font-semibold mr-4' >Phone:</h4>
                                <h5>(+88)017 4995 8641</h5>

                            </div>
                            <hr className='' />
                            <div className=' p-4 flex'>
                                <h4 className='font-semibold mr-4' >Email:</h4>
                                <h5>iqbal.07asif@gmail.com</h5>

                            </div>
                            <hr className='' />
                            <div className=' p-4 flex'>
                                <h4 className='font-semibold mr-4' >Address:</h4>
                                <h5>Mirpur, Dhaka-1216</h5>

                            </div>
                        </div>

                        <div className='lg:w-3/5 p-4'>
                            <h1 className='font-semibold'>Hello! I’m Md Asif Iqbal</h1>
                            <p>To gain confidence and fame using my potential in the field of
                                “Web Development”, and express my innovative creative skills
                                for self and company growth.</p>
                            <div className='lg:mt-16 mt-7'>
                                <a download={cv} href='https://drive.google.com/uc?export=download&id=1sNwvwqVIAAh7Ebovhbq3nB8zDauNJY5k' rel="noopener noreferrer"><button className="rounded-none btn bg-[#3078fb] border-0  hover:bg-white hover:text-[#3078fb] hover:border-[1px] hover:border-[#3078fb] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300">Download CV</button></a>
                                <a href="#home-about"><button className="rounded-none btn bg-white text-[#3078fb] border-[1px] border-[#3078fb]  hover:bg-[#3078fb] hover:text-white hover:border-[#3078fb] ml-5 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300">Contact Me</button></a>
                            </div>
                        </div>
                    </div>

                    {/* Skills */}
                    <div id='skills' className='lg:mx-40 lg:mt-20'>
                        <h2 className='font-light text-4xl text-center mb-5'>Skills</h2>
                        <div className='lg:flex justify-center'>

                            <div className='lg:w-1/2 bg-white lg:mr-4 mr-4 my-5 shadow'>
                                <h1 className='text-center p-5 font-semibold text-2xl'>Developer Skills</h1>
                                <div className='mt-4 mb-2'>
                                    <ul><span className='font-semibold p-7 text-lg mb-3'>Comfortable:</span>


                                        <span className='flex justify-between'>
                                            <li className='py-4 px-7 flex items-center'><AiFillHtml5 className='text-xl mr-2'></AiFillHtml5> HTML</li>

                                            <li className='py-4 px-7 flex items-center'><DiCss3 className='text-xl mr-2'></DiCss3> CSS</li>
                                        </span>
                                        <hr className='mx-5' />

                                        <span className='flex justify-between'>
                                            <li className='py-4 px-7 flex items-center'><FaReact className='text-xl mr-2'></FaReact> React</li>
                                            <li className='py-4 px-7 flex items-center'><TbBrandJavascript className='text-xl mr-2'></TbBrandJavascript>Javascript</li>
                                        </span>
                                        <hr className='mx-5' />

                                        <span className='flex justify-between'>
                                            <li className='py-4 px-7 flex items-center'><FaNodeJs className='text-xl mr-2'></FaNodeJs>Node JS</li>
                                            <li className='py-4 px-7 flex items-center'><SiMongodb className='text-xl mr-2'></SiMongodb>MongoDB</li>
                                        </span>
                                        <hr className='mx-5' />

                                        <span className='flex justify-between'>
                                            <li className='py-4 px-7 flex items-center'><SiTailwindcss className='text-xl mr-2'></SiTailwindcss>Tailwind</li>
                                            <li className='py-4 px-7 flex items-center'><GiSunflower className='text-xl mr-2'></GiSunflower>daisyUI</li>
                                        </span>
                                        <hr className='mx-5' />
                                        <span className='flex justify-between'>
                                            <li className='py-4 px-7 flex items-center'><FaBootstrap className='text-xl mr-2'></FaBootstrap>Bootstrap</li>
                                            <li className='py-4 px-7 flex items-center'><TbBrandBootstrap className='text-xl mr-2'></TbBrandBootstrap>React Bootstrap</li>
                                        </span>
                                    </ul>

                                    <ul className='mt-10'><span className='font-semibold p-7 text-lg mb-3'>Tools:</span>


                                        <span className='flex justify-between'>
                                            <li className='py-4 px-7 flex items-center'><DiVisualstudio className='text-xl mr-2'></DiVisualstudio> VS-Code</li>

                                            <li className='py-4 px-7 flex items-center'><FaGithub className='text-xl mr-2'></FaGithub> Github</li>
                                        </span>
                                        <hr className='mx-5' />

                                        <span className='flex justify-between'>
                                            <li className='py-4 px-7 flex items-center'><SiFirebase className='text-xl mr-2'></SiFirebase> Firebase</li>
                                            <li className='py-4 px-7 flex items-center'><SiNetlify className='text-xl mr-2'></SiNetlify> Netlify</li>

                                        </span>
                                        <hr className='mx-5' />

                                        <span className='flex justify-between'>
                                            <li className='py-4 px-7 flex items-center'><AiFillChrome className='text-xl mr-2'></AiFillChrome> DevTools</li>

                                            <li className='py-4 px-7 flex items-center'><FaFigma className='text-xl mr-2'></FaFigma> Figma</li>
                                        </span>

                                    </ul>
                                </div>
                            </div>

                            <div className='lg:w-1/2 bg-white lg:ml-4 ml-4 my-5 shadow'>
                                <h1 className='text-center p-5 font-semibold text-2xl'>Additional Skills</h1>
                                <div className='mt-4 mb-2'>
                                    <ul><span className='font-semibold p-7 text-lg mb-3'>Graphic Design:</span>


                                        <span className='flex justify-between'>
                                            <li className='py-4 px-7 flex items-center'><DiPhotoshop className='text-xl mr-2'></DiPhotoshop> Adobe Photoshop</li>

                                            <li className='py-4 px-7 flex items-center'><DiIllustrator className='text-xl mr-2'></DiIllustrator> Adobe Illustrator</li>
                                        </span>
                                        <hr className='mx-5' />

                                        <span className='flex justify-between'>
                                            <li className='py-4 px-7 flex items-center'><SiAdobeindesign className='text-xl mr-2'></SiAdobeindesign> Adobe Indesign</li>
                                            <li className='py-4 px-7 flex items-center'><SiCanva className='text-xl mr-2'></SiCanva>Canva</li>
                                        </span>
                                    </ul>

                                    <ul className='mt-10'><span className='font-semibold p-7 text-lg mb-3'>Video Editing:</span>


                                        <span className='flex justify-between'>
                                            <li className='py-4 px-7 flex items-center'><SiAdobepremierepro className='text-xl mr-2'></SiAdobepremierepro> Adobe Premiere Pro</li>
                                        </span>

                                    </ul>


                                    <ul className='mt-10'><span className='font-semibold p-7 text-lg mb-3'>Other Software Skills:</span>


                                        <span className='flex justify-between'>
                                            <li className='py-4 px-7 flex items-center'><SiMicrosoftoffice className='text-xl mr-2'></SiMicrosoftoffice> MS Office</li>

                                            <li className='py-4 px-7 flex items-center'><SiAdobeacrobatreader className='text-xl mr-2'></SiAdobeacrobatreader> Adobe Acrobat</li>
                                        </span>
                                        <hr className='mx-5' />

                                        <span className='flex justify-between'>
                                            <li className='py-4 px-7 flex items-center'><FaDiscord className='text-xl mr-2'></FaDiscord> Discord</li>

                                            <li className='py-4 px-7 flex items-center'><SiObsstudio className='text-xl mr-2'></SiObsstudio> OBS Studio</li>
                                        </span>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Projects */}

                    <div>
                        
                    </div>



                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li><a href='#skills'>Skills</a></li>
                        <li><a href='/'>Sidebar Item 2</a></li>
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default Banner;