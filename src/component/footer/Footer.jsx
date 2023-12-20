import React from "react";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import { SiFacebook, SiTwitter, SiInstagram } from "react-icons/si";
import GooglePay from "../Img/gplay.png";
import AppStore from "../Img/astore.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <footer className="font-sans bg-gray-300 ">
        <div className="container mx-auto flex flex-wrap ">
          <div className="w-full md:w-1/4 lg:w-1/4 xl:w-1/4 px-4 mb-8">
            <h2 className="text-gray-500 text-lg font-semibold mb-4">
              Inside Deals and Offers !!
            </h2>
            <div className="flex flex-col">
              <Link>
                <div className="mb-2">
                  <img
                    src={GooglePay}
                    alt="Google Pay"
                    className="h-8 md:h-12 inline rounded-md shadow-md"
                  />
                </div>
              </Link>
              <Link>
                <div>
                  <img
                    src={AppStore}
                    alt="App Store"
                    className="h-8 md:h-12 inline rounded-md shadow-md"
                  />
                </div>
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/4 lg:w-1/4 xl:w-1/4 px-4 mb-8">
            <h2 className="text-gray-500 text-lg font-semibold mb-4">Links</h2>
            <ul className="text-gray-500">
              <li className="mb-2">About Us</li>
              <li className="mb-2">Contact Us</li>
              <li className="mb-2">Blog</li>
              <li className="mb-2">FAQ'S</li>
              <li>Hiring</li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 lg:w-1/4 xl:w-1/4 px-4 mb-8">
            <h2 className="text-gray-500 text-lg font-semibold mb-4">
              Policies
            </h2>
            <ul className="text-gray-500">
              <li className="mb-2">Terms and Conditions</li>
              <li className="mb-2">Return Policy</li>
              <li className="mb-2">Data Policy</li>
              <li className="mb-2">Refund Policy</li>
              <li>G-Cash Policy</li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 lg:w-1/4 xl:w-1/4 px-4 mb-8">
            <h2 className="text-gray-500 text-lg font-semibold mb-4">
              Contact Us
            </h2>
            <ul className="text-gray-500">
              <li className="mb-2 flex items-center">
                <FaPhone className="mr-2" />
                <span>9803513810/9861315260</span>
              </li>
              <li className="mb-2 flex items-center">
                <FaEnvelope className="mr-2" />
                <span>www.info@gyapu.com</span>
              </li>
              <li className="flex items-center">
                <SiFacebook className="mr-2 text-blue-500" />

                <SiTwitter className="mr-2 text-blue-700" />

                <SiInstagram className="text-red-400" />
              </li>
            </ul>
          </div>
        </div>
       
      </footer>
    </>
  );
};

export default Footer;
