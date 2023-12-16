import React from "react";
import profile from "../../../assets/Asif.png";
import cv from "../../../assets/Asif resume.pdf";
import {
  FaLinkedin,
  FaGithub,
  FaBehanceSquare,
  FaInstagram,
} from "react-icons/fa";

const AboutMe = () => {
  return (
    <div id="about">
      <div className="avatar flex mt-16 lg:-mt-32">
        <div className="lg:w-60 w-40 rounded-full mx-auto">
          <img className="mx-auto" src={profile} alt="" />
        </div>
      </div>

      <div id="" className="text-center mt-3 ">
        <h1 className="text-3xl">Md Asif Iqbal</h1>
        <p className="mt-2 text-lg">Web Developer</p>
        <div className="flex items-center justify-center text-2xl mt-3">
          <a
            target="blank"
            className="px-4 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300"
            href="https://github.com/asifiqbal07"
          >
            <FaGithub className="shadow"></FaGithub>
          </a>
          <a
            target="blank"
            className="px-4 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300"
            href="https://www.behance.net/iqbalasif07"
          >
            <FaBehanceSquare className="shadow"></FaBehanceSquare>
          </a>
          <a
            target="blank"
            className="px-4 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300"
            href="https://www.linkedin.com/in/iqbal07asif/"
          >
            <FaLinkedin className="shadow"></FaLinkedin>
          </a>

          <a
            target="blank"
            className="px-4 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300"
            href="https://www.instagram.com/isitasif/"
          >
            <FaInstagram className="shadow"></FaInstagram>
          </a>
        </div>
      </div>

      {/* Details */}
      <div className="lg:flex lg:mx-40 my-10 bg-white shadow-sm m-5">
        <div className="lg:w-2/5">
          {/* <div className=" p-4 flex">
            <h4 className="font-semibold mr-4">Citizenship:</h4>
            <h5>Bangladesh</h5>
          </div>
          <hr className="" />
          <div className=" p-4 flex">
            <h4 className="font-semibold mr-4">Phone:</h4>
            <h5>(+88)017 4995 8641</h5>
          </div>
          <hr className="" />
          <div className=" p-4 flex">
            <h4 className="font-semibold mr-4">Email:</h4>
            <h5>iqbal.07asif@gmail.com</h5>
          </div>
          <hr className="" />
          <div className=" p-4 flex">
            <h4 className="font-semibold mr-4">Address:</h4>
            <h5>Mirpur, Dhaka-1216</h5>
          </div> */}
          <div className="flex">
            <div className=" p-4">
              <h4 className="font-semibold ml-4 my-4">Citizenship:</h4>
              <hr className="" />
              <h4 className="font-semibold ml-4 my-4">Phone:</h4>
              <hr className="" />
              <h4 className="font-semibold ml-4 my-4">Email:</h4>
              <hr className="" />
              <h4 className="font-semibold ml-4 my-4">Address:</h4>
            </div>

            <div className=" p-4">
              <h5 className="mr-72 my-4">Bangladesh</h5>
              <hr className="" />
              <h5 className="mr-72 my-4">(+88)017 4995 8641</h5>
              <hr className="" />
              <h5 className="mr-72 my-4">iqbal.07asif@gmail.com</h5>
              <hr className="" />
              <h5 className="mr-72 my-4">Mirpur, Dhaka-1216</h5>
            </div>
          </div>
        </div>

        <div className="lg:w-3/5 p-4 ml-8 my-4">
          <h1 className="font-semibold mb-2">Hello! I’m Md Asif Iqbal</h1>
          <p>
            I'm a guy who likes to improve his skills every day. I have some
            quick learning abilities which help me to complete the web
            development course from Programming Hero. During my learning period,
            I completed many exciting projects with them. Not only that I also
            have some professional graphic designing skills. Which help me to
            build a clean, eye-catching, and customer-friendly website.
          </p>
          <div className="mt-5">
            <a
              download={cv}
              href="https://drive.google.com/uc?export=download&id=1sNwvwqVIAAh7Ebovhbq3nB8zDauNJY5k"
              rel="noopener noreferrer"
            >
              <button className="rounded-none btn bg-[#242e39] border-0  hover:bg-white hover:text-[#242e39] hover:border-[1px] hover:border-[#242e39] ">
                Download CV
              </button>
            </a>
            <a href="#home-about">
              <button className="rounded-none btn bg-white text-[#242e39] border-[1px] border-[#242e39]  hover:bg-[#242e39] hover:text-white hover:border-[#242e39] ml-5 ">
                Contact Me
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
