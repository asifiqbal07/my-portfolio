import React from 'react';
import { FaGithub, FaReact, FaNodeJs, FaBootstrap, FaFigma, FaDiscord } from "react-icons/fa";
import { AiFillHtml5, AiFillChrome } from "react-icons/ai";
import { DiCss3, DiVisualstudio, DiIllustrator, DiPhotoshop } from "react-icons/di";
import { TbBrandJavascript } from "react-icons/tb";
import { SiMongodb, SiTailwindcss, SiFirebase, SiNetlify, SiAdobeindesign, SiCanva, SiAdobepremierepro, SiMicrosoftoffice, SiObsstudio, SiAdobeacrobatreader } from "react-icons/si";
import { GiSunflower } from "react-icons/gi";
import { TbBrandBootstrap } from "react-icons/tb";

const Skills = () => {
    return (
        <div id='skills' className='lg:mx-40 lg:mt-20'>
                        <h2 className='font-light text-4xl text-center mb-5'>Skills</h2>
                        <div className='lg:flex justify-center'>

                            <div className='lg:w-1/2 bg-white lg:mr-4  my-5 shadow mx-5 lg:mx-0 border-t-[8px] border-[#213038] rounded-lg'>
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

                            <div className='lg:w-1/2 bg-white lg:ml-4 my-5 shadow mx-5 lg:mx-0 border-t-[8px] border-[#213038] rounded-lg'>
                                <h1 className='text-center p-5 font-semibold text-2xl'>Additional Skills</h1>
                                <div className='mt-4 mb-2 '>
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
    );
};

export default Skills;