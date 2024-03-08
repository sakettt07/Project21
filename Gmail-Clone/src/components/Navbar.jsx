import React from 'react';
import { IoMenu } from "react-icons/io5";
import img1 from "../assets/images/logo.png";
import img2 from "../assets/images/user.png";
import { RxQuestionMarkCircled } from "react-icons/rx";
import { IoSettingsOutline } from "react-icons/io5";
import { CgMenuGridO } from "react-icons/cg";
import { FaUserCircle } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { auth } from '../firebase/setup';
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className='bg-[#f6f7fc] w-full p-3 pl-5 pr-8 items-center flex justify-between'>
      <div className='flex items-center gap-1'>
      <IoMenu title='Main-Menu' className='text-[25px] cursor-pointer' />
      <img title='Gmail' src={img1} className='w-12 cursor-pointer' alt="" />
      <h3 className='text-[22px] cursor-pointer font-semibold text-slate-700'>Gmail</h3>
      </div>
      <div className='search relative'>
        <IoMdSearch title='Search' className='absolute md:left-[-101%] cursor-pointer top-1/2 transform -translate-y-1/2 text-[22px] text-slate-700' />
      <input type="text" placeholder='Search mail' className='bg-[#eaf1fb] p-3 rounded-full pl-12 md:ml-[-20rem] text-[18px] w-[40vw]' />
      </div>
      <div className='flex items-center gap-3 mr-3'>
        <RxQuestionMarkCircled title='Support' className='text-[25px] hidden md:flex cursor-pointer font-semibold text-[#5f6368]' />
        <IoSettingsOutline title='Settings' className='text-[25px] hidden md:flex cursor-pointer font-semibold text-[#5f6368]' />
        <CgMenuGridO title='Explore more' className='text-[28px] hidden md:flex cursor-pointer font-semibold text-[#5f6368]' />
        {auth.currentUser ? (
          <img title='User' src={auth.currentUser.photoURL} className='w-9 rounded-full cursor-pointer' alt="" />
        ) : (
          <img title='User' src={img2} className='w-12 rounded-full cursor-pointer' alt="" />
        )}
      </div>
    </div>
  )
}

export default Navbar
