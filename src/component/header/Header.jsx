import React from 'react'
import { GoSearch } from "react-icons/go";
import { FaRegHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import Logo from "../Img/gyapu.png"

import { NavLink } from "react-router-dom";

const Header = () => {
  return (
   <>
   <div className="font-sans flex my-1 mx-3 space-x-4  place-content-center  ...">
        <div className='mx-6 my-4'>
         <img src={Logo} className='h-12 w-full' alt='img' />
        </div>
         <div className='flex mx-5 my-4 space-x-4'>
         <div className='flex'>
          <input
            type="text"
            placeholder="Search Here"
            className="w-96 h-10 px-4 border border-rose-500"
          />
           <div className="justify-self-center">
           <button className="text-white bg-yellow-400 h-10  w-12" >
           <GoSearch className="h-6 w-5  ml-2"/>
          </button>
           </div>
          </div>
          <div className='flex'>
  <FaRegHeart className="h-6 w-6 text-gray-500 mr-1 mt-2" />
  <span className='flex text-base mt-2'>Wishlist</span>
  <FaCartShopping className="h-6 w-6 text-gray-500 ml-2 mt-2" />
  <span className='flex text-xl pt-1 ml-1' style={{ position: 'relative' }}>
    cart
    <span className = " text-base bg-yellow-400 "style={{ position: 'absolute', width:"22px", height:"22px", display:"flex",
      justifyContent:'center', alignItems:'center', marginTop: "-8px", marginLeft: "25px", borderRadius:"11px", 
     fontSize:"14px" , color:"black"}}>
      0 
    </span>
    
  </span>
</div>


         </div>
        </div>
          
     
          
   </>
  )
}

export default Header