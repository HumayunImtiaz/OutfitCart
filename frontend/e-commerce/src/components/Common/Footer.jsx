import React from "react";
import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterXLine } from "react-icons/ri";
import { TbBrandMeta } from "react-icons/tb";
import { FiPhoneCall } from "react-icons/fi";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="border-t py-12">
      <div className="container  mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 lg:px-0">
        <div>
          <h3 className="text-lg text-gray-800 mb--4">Newsletter</h3>
          <p className="text-gray-500 mb-4">
            Be the first hear about new products, exclusive events, and online
            offers
          </p>
          <p className="font-medium text-sm text-gray-600 mb-6">
            Sign Up and get 10% off your first order.
          </p>
          {/* Newsletter form */}
          <form className="flex">
            <input
              className="p-3 w-full text-sm border-t border-l border-b border-gray-300 rounded-l-md 
                    focus:outline-none focus:ring-2 focus:bg-gray-300 transition-all"
              required
              type="email"
              placeholder="Enter the Email"
            />
            <button
              type="submit"
              className="bg-black text-white px-6 py-4 text-sm rounded-r-md hover:bg-gray-800 transition-all
                    border-b"
            >
              Subscribe
            </button>
          </form>
        </div>
        {/* Shop Link */}
        <div>
          <h3 className="text-lg text-gray-800 mb-4 ">Shop</h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <Link to="#" className="hover:text-gray-500 transition-colors">
                Men's top Waer
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-500 transition-colors">
                WomMen's top Waer
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-500 transition-colors">
                Men's Bottom Waer
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-500 transition-colors">
                WoMen's Bottom Waer
              </Link>
            </li>
          </ul>
        </div>

        {/* Support Links */}
        <div>
          <h3 className="text-lg text-gray-800 mb-4 ">Support</h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <Link to="#" className="hover:text-gray-500 transition-colors">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-500 transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-500 transition-colors">
                FAQs
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-500 transition-colors">
                Features
              </Link>
            </li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
            <h3 className="text-lg text-gra-800 mb-4">Follow Us</h3>
            <div className="flex items-center space-x-4 mb-6">
                <a className="hover:text-gray-300"
                href="https://www.facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                >
                    <TbBrandMeta className="h-5 w-5"/>
                </a>
                 <a className="hover:text-gray-300"
                href="https://www.facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                >
                   <IoLogoInstagram className="h-5 w-5"/>
                </a>
                 <a className="hover:text-gray-300"
                href="https://www.facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                >
                    <RiTwitterXLine className="h-5 w-5"/>
                </a>
            </div>
            <p className="text-gray-500">Call Us</p>
            <p>
                <FiPhoneCall className="inline-block mr-2"/>
                +913054353847
            </p>
        </div>
      </div>
      {/* Footer Bottom */}
        <div className="container mx-auto mt-12 px-4 lg:px-0 border-t border-gray-200 pt-6">
            <p className="text-gray-500 text-sm text-center tracking-tighter">
                @2025 CompileTb All Right Reserved
            </p>
        </div>

    </footer>
  );
}

export default Footer;
