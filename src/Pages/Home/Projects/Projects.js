import React from "react";
import { FaArrowRight, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import lz0 from "../../../assets/Screenshot (79).PNG";
import lz1 from "../../../assets/Screenshot (80).png";
import lz2 from "../../../assets/Screenshot (81).png";
import lz3 from "../../../assets/Screenshot (82).png";
import lz4 from "../../../assets/Screenshot (89).PNG";

import fl0 from "../../../assets/Screenshot (84).png";
import fl1 from "../../../assets/Screenshot (85).png";
import fl2 from "../../../assets/Screenshot (83).png";
import fl3 from "../../../assets/Screenshot (90).PNG";
import fl4 from "../../../assets/Screenshot (91).PNG";

import su0 from "../../../assets/Screenshot (86).png";
import su1 from "../../../assets/Screenshot (87).png";
import su2 from "../../../assets/Screenshot (88).png";
import su3 from "../../../assets/Screenshot (92).PNG";
import su4 from "../../../assets/Screenshot (93).PNG";


import { FiExternalLink } from "react-icons/fi";

const Projects = () => {
  return (
    <div id="projects" className="m-5 lg:m-0 lg:mx-40 lg:mt-10 ">
      <div className="card card-compact bg-base-100 rounded-none ">
        <div className="card-body ">
          <h4 className="card-title text-[#213038]">MY PROJECTS</h4>
          <h1 className="text-4xl font-bold justify-center">
            Check Some Interesting Projects of mine!
          </h1>

          {/* <p className='mt-4 text-lg'>Best internet packages in your area which provides fully dedicated, super fast, cost-effective, secured internet connection.</p> */}
          {/* <Link to='/packages'><button className="btn bg-[#3078fb] border-0 rounded-none hover:bg-white hover:text-[#3078fb] hover:border-[1px] hover:border-[#3078fb] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300">Check All Packages </button></Link> */}
        </div>
      </div>

      <div>
        <div
          className="card card-compact mt-8 bg-base-100  transition ease-in-out delay-150  hover:-translate-y-2 hover:scale-104 duration-300 rounded-md
                border-l-[5px] border-[#213038] "
        >
          <div className="card-body">
            <div className="lg:mx-16 mx-auto mt-10 ">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-5">
                <div className="lg:col-span-1 w-full shadow-md">
                  <Carousel autoPlay={true} infiniteLoop={true}>
                    <div>
                      <img src={lz0} alt="" />
                    </div>
                    <div>
                      <img src={lz1} alt="" />
                    </div>
                    <div>
                      <img src={lz2} alt="" />
                    </div>
                    <div>
                      <img src={lz3} alt="" />
                    </div>
                    <div>
                      <img src={lz4} alt="" />
                    </div>
                  </Carousel>
                </div>

                <div className="lg:col-span-1 w-full ">
                  <div className="flex justify-between">
                    <h1 className="text-3xl font-bold  mx-auto lg:mx-0">
                      Laptop Zone
                    </h1>

                    <div className="flex">
                      <a
                        href="https://laptop-zone-3f676.web.app/"
                        // className=" bg-[#242e39] py-2 rounded  uppercase text-xs px-5 text-white block text-center"
                        className="pr-4 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FiExternalLink className="text-xl text-center"></FiExternalLink>
                        {/* Live Website */}
                      </a>
                      <a
                        href="https://github.com/asifiqbal07/a12-laptop-zone"
                        // className=" bg-[#242e39] py-2 rounded  uppercase text-xs px-5 text-white block text-center"
                        className="pr-4 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FaGithub className="text-xl text-center"></FaGithub>
                        {/* Source Code */}
                      </a>
                    </div>
                  </div>
                  <p className=" my-4 text-center lg:text-start">
                    Laptop Zone is a used laptop buying and selling website.
                    User can purchase their favourite laptops with Stripe
                    payment gateway.
                  </p>
                  <hr className="mr-96 font-bold mt-5" />

                  <div className=" flex items-center justify-center lg:justify-start gap-5 my-4"></div>
                  <div className="flex ">
                    <div>
                      <h2 className=" font-bold  uppercase text-center lg:text-start">
                        Features:
                      </h2>
                      <ul className=" my-3 flex flex-col gap-3 text-center lg:text-start">
                        <li>CRUD Operation</li>
                        <li>NodeJS authentication with JWT</li>
                        <li>Firebase Authentication</li>
                        <li>User and Admin Dashboard</li>
                        <li>Stripe Payment</li>
                        <li>Admin Panel</li>
                        <li>Product Live Count</li>
                      </ul>
                    </div>
                    <div className="ml-10">
                      <h2 className=" font-bold  uppercase text-center lg:text-start">
                        Technology:
                      </h2>
                      <ul className=" my-3 flex flex-col gap-3 text-center lg:text-start">
                        <li>React JS</li>
                        <li>React Router Dom</li>
                        <li>Tailwind</li>
                        <li>daisyUI</li>
                        <li>MongoDB</li>
                        <li>Node Js</li>
                        <li>Express Js</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2nd */}

      <div>
        <div
          className="card card-compact mt-8 bg-base-100  transition ease-in-out delay-150  hover:-translate-y-2 hover:scale-104 duration-300 rounded-md
                border-l-[5px] border-[#213038] "
        >
          <div className="card-body">
            <div className="lg:mx-16 mx-auto mt-10 ">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-5">
                <div className="lg:col-span-1 w-full shadow-md">
                  <Carousel autoPlay={true} infiniteLoop={true}>
                    <div>
                      <img src={fl0} alt="" />
                    </div>
                    <div>
                      <img src={fl1} alt="" />
                    </div>
                    <div>
                      <img src={fl2} alt="" />
                    </div>
                    <div>
                      <img src={fl3} alt="" />
                    </div>
                    <div>
                      <img src={fl4} alt="" />
                    </div>
                  </Carousel>
                </div>

                <div className="lg:col-span-1 w-full ">
                  <div className="flex justify-between">
                    <h1 className="text-3xl font-bold  mx-auto lg:mx-0">
                      Fast Link
                    </h1>

                    <div className="flex">
                      <a
                        href="https://fast-link-fdad4.web.app/"
                        // className=" bg-[#242e39] py-2 rounded  uppercase text-xs px-5 text-white block text-center"
                        className="pr-4 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FiExternalLink className="text-xl text-center"></FiExternalLink>
                        {/* Live Website */}
                      </a>
                      <a
                        href="https://github.com/asifiqbal07/a11-fast-link"
                        // className=" bg-[#242e39] py-2 rounded  uppercase text-xs px-5 text-white block text-center"
                        className="pr-4 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FaGithub className="text-xl text-center"></FaGithub>
                        {/* Source Code */}
                      </a>
                    </div>
                  </div>
                  <p className=" my-4 text-center lg:text-start">
                    Fast Link internet service providing website. Where
                    customers can easily enroll any package or the can make
                    their own custom package.
                  </p>
                  <hr className="mr-96 font-bold mt-5" />

                  <div className=" flex items-center justify-center lg:justify-start gap-5 my-4"></div>
                  <div className="flex ">
                    <div>
                      <h2 className=" font-bold  uppercase text-center lg:text-start">
                        Features:
                      </h2>
                      <ul className=" my-3 flex flex-col gap-3 text-center lg:text-start">
                        <li>CRUD Operation</li>
                        <li>NodeJS authentication with JWT</li>
                        <li>Firebase Authentication</li>
                        <li>User and Admin Dashboard</li>
                        <li>Stripe Payment</li>
                        <li>Admin Panel</li>
                        <li>Product Live Count</li>
                      </ul>
                    </div>
                    <div className="ml-10">
                      <h2 className=" font-bold  uppercase text-center lg:text-start">
                        Technology:
                      </h2>
                      <ul className=" my-3 flex flex-col gap-3 text-center lg:text-start">
                        <li>React JS</li>
                        <li>React Router Dom</li>
                        <li>Tailwind</li>
                        <li>daisyUI</li>
                        <li>MongoDB</li>
                        <li>Node Js</li>
                        <li>Express Js</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3rd */}

      <div>
        <div
          className="card card-compact mt-8 bg-base-100  transition ease-in-out delay-150  hover:-translate-y-2 hover:scale-104 duration-300 rounded-md
                border-l-[5px] border-[#213038] "
        >
          <div className="card-body">
            <div className="lg:mx-16 mx-auto mt-10 ">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-5">
                <div className="lg:col-span-1 w-full shadow-md">
                  <Carousel autoPlay={true} infiniteLoop={true}>
                    <div>
                      <img src={su0} alt="" />
                    </div>
                    <div>
                      <img src={su1} alt="" />
                    </div>
                    <div>
                      <img src={su2} alt="" />
                    </div>
                    <div>
                      <img src={su3} alt="" />
                    </div>
                    <div>
                      <img src={su4} alt="" />
                    </div>
                  </Carousel>
                </div>

                <div className="lg:col-span-1 w-full ">
                  <div className="flex justify-between">
                    <h1 className="text-3xl font-bold  mx-auto lg:mx-0">
                      Skill Up
                    </h1>

                    <div className="flex">
                      <a
                        href="https://skill-up-51282.web.app/"
                        // className=" bg-[#242e39] py-2 rounded  uppercase text-xs px-5 text-white block text-center"
                        className="pr-4 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FiExternalLink className="text-xl text-center"></FiExternalLink>
                        {/* Live Website */}
                      </a>
                      <a
                        href="https://github.com/asifiqbal07/a10-skill-up"
                        // className=" bg-[#242e39] py-2 rounded  uppercase text-xs px-5 text-white block text-center"
                        className="pr-4 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FaGithub className="text-xl text-center"></FaGithub>
                        {/* Source Code */}
                      </a>
                    </div>
                  </div>
                  <p className=" my-4 text-center lg:text-start">
                    Skill Up is educational courses selling website. Students
                    can easily enroll any courses and improve their skills.
                  </p>
                  <hr className="mr-96 font-bold mt-5" />

                  <div className=" flex items-center justify-center lg:justify-start gap-5 my-4"></div>
                  <div className="flex ">
                    <div>
                      <h2 className=" font-bold  uppercase text-center lg:text-start">
                        Features:
                      </h2>
                      <ul className=" my-3 flex flex-col gap-3 text-center lg:text-start">
                        <li>CRUD Operation</li>
                        <li>NodeJS authentication with JWT</li>
                        <li>Firebase Authentication</li>
                      </ul>
                    </div>
                    <div className="ml-10">
                      <h2 className=" font-bold  uppercase text-center lg:text-start">
                        Technology:
                      </h2>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
