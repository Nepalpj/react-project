import React from 'react'
import { FiUser } from "react-icons/fi";
import { FaShopify } from "react-icons/fa";
import { FaOpencart } from "react-icons/fa";
import { GoSearch } from "react-icons/go";
import Logo from "../Img/gyapu.png"

import { NavLink } from "react-router-dom";

const Header = () => {
  return (
   <>
   <div class="font-sans flex my- mx-3 space-x-4  ...">
        <div className='mx-6 my-4'>
         <img src={Logo} className='h-12 w-full' alt='img' />
        </div>
          <input
            type="text"
            placeholder="Search Here"
            className="w-2/5 h-12 px-4 border border-rose-500"
          />
           <button className="text-white bg-yellow-400 h-12  w-9 items-center justify-center " >
            <GoSearch className="h-6 w-6 " />
          </button>
          <div className='space-x-4 flex'>
          <FiUser className="h-10 w-6 text-rose-500" />{" "}
          <span className='flex text-xl pt-1'>
          <FaOpencart className="h-10 w-6 text-rose-500" />{" "}
            cart
          </span>
          <FaShopify className="h-10 w-6 text-rose-700 " />
          </div>
        </div>
          
     
          
   </>
  )
}

export default Header