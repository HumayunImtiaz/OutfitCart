import React, { useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import CartContent from '../Cart/CartContent'
import { useNavigate } from 'react-router-dom'

function CartDrawer({drawerOpen, ToggleCartDrawer}) {
 
  const navigate = useNavigate();
  
  const handleCheckout=()=>{
    ToggleCartDrawer()
    navigate("/checkout")

  }  

  
    return (
        <>
        <div className={`fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-[30rem] h-full bg-white shadow-lg tranform 
    transition-transform duration-300 flex flex-col  z-50 ${drawerOpen? "translate-x-0": "translate-x-full"}`}>

        {/* Close Button */}
        <div className='flex justify-end p-4'>
            <button onClick={ToggleCartDrawer}>
                <IoMdClose className='h-6 w-6 text-gray-600'/>
            </button>
        </div>
        {/* cart content with scroll area */}
        <div className='flex-grow p-4 overflow-auto'>
            <h2 className='text-xl font-semibold mb-4'>Your Cart</h2>
            {/* component for Cart Content */}
            <CartContent/>
        </div>
        {/* Checkout button fixed at the bottom */}
        <div className='p-4 bg-white sticky bottom-0 '>
            <button 
            onClick={handleCheckout}
            className='w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800'>
                Checkout
            </button>
            <p className='text-sm tracking-tighter text-gray-500 mt-2 text-center'>
                Shipping taxes, and discount codes calculated at checkout.
            </p>
 
        </div>

</div>
</>

    )
}

export default CartDrawer