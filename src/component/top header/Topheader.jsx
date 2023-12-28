import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa6";
import { FaViber } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { FaCartShopping } from "react-icons/fa6";


const Nav = () => {
  return (
    <>
      <div className="flex justify-between  ...">
        <div className="flex pl-5 h-5 sm:hidden md:flex ">
          <FaWhatsapp className="h-8 text-green-500" />
          <span className="h-4 pl-1 pr-1">|</span>
          <FaViber className="h-8" />
          <span className="pl-1 text-slate-600 hover:text-yellow-400 sm:hidden md:flex">
            9803513810
          </span>
        </div>

        <div>
          <div className="flex justify-between sm:flex flex-col md:flex-row  ...">
            <span className="flex pl-5 pr-5 text-slate-600 hover:text-yellow-400 ">
              Rewards
            </span>
            <span className="flex pl-5 pr-5 text-slate-600 hover:text-yellow-400 ">
              Sell Your Product
            </span>
            <span className="flex pl-5 pr-5 text-slate-600 hover:text-yellow-400 ">
              Login/Register
            </span>

            <div className="flex pt-1 text-slate-600  pr-5">
              <FaMobileAlt />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const Topheader = () => {
  const [isOpen, setIsOpen]= useState(false);
  const toggleNavbar =()=>{
    setIsOpen(!isOpen);
  }
  return (
    <>
      <div className=" hidden md:contents ">
        <Nav />
      </div>
      <div className="md:hidden">
        <button onClick={toggleNavbar}>
          {isOpen ? <X/> : <Menu/>}
        </button>
      </div>
      {isOpen && (
        <div className="flex ">
          <div>
          <div className="flex justify-between sm:flex flex-col md:flex-row  ...">
            <span className="flex pl-5 pr-5 text-slate-600  ">
              Rewards
            </span>
            <span className="flex pl-5 pr-5 text-slate-600  ">
              Sell Your Product
            </span>
            <span className="flex pl-5 pr-5 text-slate-600  ">
              Login/Register
            </span>
            <div className=" flex flex-row ml-3">
            <FaCartShopping className="h-6 w-6 text-gray-500 ml-2 mt-2" />
            <span
              className="flex text-xl pt-1 ml-1"
              style={{ position: "relative" }}
            >
              cart
              <span
                className="font-bold text-base bg-yellow-400 "
                style={{
                  position: "absolute",
                  width: "22px",
                  height: "22px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "-8px",
                  marginLeft: "25px",
                  borderRadius: "11px",
                  fontSize: "14px",
                  color: "black",
                }}
              >
                0
              </span>
            </span>
            </div>
          </div>
        </div>
        </div>
      )}
    </>
  );
};

export default Topheader;
