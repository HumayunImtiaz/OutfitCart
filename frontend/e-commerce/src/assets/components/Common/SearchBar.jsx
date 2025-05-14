import React, { useState } from 'react'
import { HiMagnifyingGlass, HiMiniXMark } from 'react-icons/hi2'

function SearchBar() {
    const[searchTerm, setsearchTerm]=useState("")
    const[isOpen, setisOPen]=useState(false)


    const HandleTogger=()=>{
        setisOPen(!isOpen)
    }

    const HandleSearch=(e)=>{
        e.preventDefault();
        console.log("Search Term:", searchTerm)
        setisOPen(false)
    }
  return (
    <>
    {/* phli div ki css mai hmny turnery operator use kia hai pora tobar or navbar ko access krny ky lye  */}
    <div className={`flex items-center justify-center w-full transition-all duration-300 ${isOpen?
    "absolute top-0 left-0 w-full bg-white h-24 ": "w-auto"}`}> 

    {/* jb hm search icon pr click kry gy tb functionality perform hogi */}
     {
        isOpen?(
           <form 
           onSubmit={HandleSearch}
           className='relative flex items-center justify-center w-full'>
            <div className='relative w-1/2'> 
                <input className='bg-gray-200 px-4 py-2 pl-2 pr-12 rounded-lg focus:outline-none w-full '
                type="text"
                placeholder='Search'
                value={searchTerm}
                onChange={(e)=>setsearchTerm(e.target.value)}
                />
                {/* search buuton jb hmara tpbar or navbar nhi shsow hoga  */}
                <button type='submit' className='absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600'>
                    <HiMagnifyingGlass className='h-6 w-6'/>
                </button>
            </div>
            {/* close icon */}
            <button type='button' 
            onClick={HandleTogger}
            className='absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800'>
                <HiMiniXMark className='h-6 w-6'/>
            </button>
           </form> 
        )
        :
        (
            <button onClick={HandleTogger}>
                <HiMagnifyingGlass className='h-6 w-6 text-gray-700'/>
            </button>
        )
    }
    </div>
  
    </>
  )
}

export default SearchBar