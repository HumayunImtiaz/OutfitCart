import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {HiOutlineUser, HiOutlineShoppingBag, HiBars3BottomRight} from 'react-icons/hi2'
import SearchBar from './SearchBar'
import CartDrawer from '../Layout/CartDrawer'

const Navbar = () => {

     const[drawerOpen, setdrawerOpen]=useState(false)
    
      const ToggleCartDrawer=()=>{
        setdrawerOpen(!drawerOpen)
      }

  return (
    <>
    <nav className='container max-auto flex items-center justify-between py-6 px-6'>
        {/* for left logo */}
        <div>
            <Link to="/" className='text-2xl font-medium'>
            Rabbit
            </Link>
        </div>
        {/* center Navigations Link */}
        <div className='hidden md:flex space-x-6'>
            <Link 
            to="#"
            className='text-gray-700 hover:text-black text-sm font-medium uppercase'
            >
                MEN
            </Link>
            <Link 
            to="#"
            className='text-gray-700 hover:text-black text-sm font-medium uppercase'
            >
                women
            </Link>
            <Link 
            to="#"
            className='text-gray-700 hover:text-black text-sm font-medium uppercase'
            >
                TOPWEAR
            </Link>
            <Link 
            to="#"
            className='text-gray-700 hover:text-black text-sm font-medium uppercase'
            >
                BOTTOM WEAR
            </Link>
        </div>
        {/* Right- icons from React-Icons */}
        <div className='flex items-center space-x-4'>
            <Link to="/profile" className='hover:text-black'>
            <HiOutlineUser className='h-6 w-6 text-gray-700' />
            </Link>
            <button onClick={ToggleCartDrawer} className='relative hover:text-gray-700 '>
                <HiOutlineShoppingBag className='h-6 w-6 text-gray-700'/>
                <span className='absolute -top-1 bg-[#ea2e0e] text-white text-xs rounded-full px-2 py-0.5'>
                    4
                </span>

            </button>
            {/* search Icons */}
            <div className='overflow-hidden'>
            <SearchBar/>
            </div>
            {/* for small screen and hide in larg screen */}
            <button className='md:hidden'> 
                <HiBars3BottomRight className='h-6 w-6 text-gray-700'/>
            </button>
           

        </div>
    </nav>
    <CartDrawer drawerOpen={drawerOpen} ToggleCartDrawer={ToggleCartDrawer}/>
    </>
  )
}

export default Navbar