import React from 'react'
import  { FaWhatsapp } from "react-icons/fa6"
import  { FaViber } from "react-icons/fa"
import  { FaMobileAlt } from "react-icons/fa"
import { NavLink, useNavigate } from 'react-router-dom'

const Topheader = () => {
  return (
    <>
    <div className='flex justify-between  ...'>
    <div className='flex pl-5 h-5 '>
    <FaWhatsapp className='h-8 text-green-500'/>
   <span className='h-4 pl-1 pr-1'>|</span> 
   <FaViber className='h-8' />
    <span className='pl-1 text-slate-600 hover:text-yellow-400 '>9803513810</span>
    </div>
    <div>
        
        <div className='flex justify-between  ...' >
        <span className='flex pl-5 pr-5 text-slate-600 hover:text-yellow-400 '>Rewards</span>
        <span className='flex pl-5 pr-5 text-slate-600 hover:text-yellow-400 '>Sell Your Product</span>
        <span className='flex pl-5 pr-5 text-slate-600 hover:text-yellow-400 '>Login/Register</span>
      
        <div className='flex pt-1 text-slate-600  pr-5' >
         <FaMobileAlt />

        </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default Topheader