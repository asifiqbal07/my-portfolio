import React from 'react';
import banner from '../../../assets/banner 2.jpg'
import { HiBars3BottomRight } from "react-icons/hi2";

const Banner = () => {
    return (
        <div className=''>
            <div className='absolute lg:top-5 lg:right-5 h-16 w-16'>
                <label htmlFor="my-drawer-4" className="drawer-button  btn btn-ghost lg:bg-[#080404]
                 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 duration-300
                "><HiBars3BottomRight className='lg:text-white text-2xl text-[#080404]'></HiBars3BottomRight></label>
            </div>
            <div className='border-b-4 border-[#242e39]'>
                <img className='hidden lg:block object-cover h-2/3 w-full' src={banner} alt="" />
            </div>
        </div>
    );
};

export default Banner;