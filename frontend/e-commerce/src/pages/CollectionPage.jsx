import React, { useEffect, useRef, useState } from 'react'
import {FaFilter} from "react-icons/fa"
import FilterSidevar from '../components/Products/FilterSidevar';
import SortOption from '../components/Products/SortOption';
import ProductGrid from '../components/Products/ProductGrid';

function CollectionPage() {
    const [products, setProducts]=useState([]);
    const sidebarRef =useRef(null)
    const [isSidebarOpen, setIsSidebarOpen]=useState(false)

    const toggleSidbar= ()=>{
        setIsSidebarOpen(!isSidebarOpen);
    };

    const  handleClickOutside=(e)=>{
        // Close sidebar if clicked outside
        //jb hmara sidebar sy bahir mouse click kry ga tu sidebar close hoga
        if(sidebarRef.current && !sidebarRef.current.contains(e.target)){
            setIsSidebarOpen(false)
        }
    };

   useEffect(() => {
    // Add event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup function
    // jb mouse sidbar ky bahir click hoga tb sidebar bnd hojay ga
    return () => {
        document.removeEventListener("mousedown", handleClickOutside);
    };
}, []); // Empty dependency array = run once on mount


useEffect (()=>{
    setTimeout(() => {
        const fetchedProducts=[
             {
        _id:1,
        name:"Product 1",
        price:100,
        image:[{url: "https://picsum.photos/500/500?random=1",}]
    },
    {
        _id:2,
        name:"Product 1",
        price:100,
        image:[{url: "https://picsum.photos/500/500?random=2",}]
    },
    {
        _id:3,
        name:"Product 2",
        price:100,
        image:[{url: "https://picsum.photos/500/500?random=3",}]
    },
    {
        _id:4,
        name:"Product 4",
        price:100,
        image:[{url: "https://picsum.photos/500/500?random=4",}]
    },
    {
        _id:5,
        name:"Product 5",
        price:100,
        image:[{url: "https://picsum.photos/500/500?random=5",}]
    },
    {
        _id:6,
        name:"Product 6",
        price:100,
        image:[{url: "https://picsum.photos/500/500?random=6",}]
    },
    {
        _id:7,
        name:"Product 7",
        price:100,
        image:[{url: "https://picsum.photos/500/500?random=7",}]
    },
    {
        _id:8,
        name:"Product 8",
        price:100,
        image:[{url: "https://picsum.photos/500/500?random=8",}]
    },
   
        ];

        setProducts(fetchedProducts)
        
    }, 1000);
},[])

  return (
    <div className='flex flex-col lg:flex-row '>
        {/* Mobile Filter Button */}
        <button 
        onClick={toggleSidbar}
        className='lg:hidden border p-2 flex justify-center items-center'>
         <FaFilter className='mr-2 '/>Filter
        </button>

        {/* Filter Sidebar */}
        <div ref={sidebarRef}
        className={`${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} fixed inset-y-0 z-50 left-0 w-64 bg-white overflow-auto transition-transform duration-300 lg:static lg:translate-x-0 no-scrollbar`}
        >
            <FilterSidevar/>
        </div>
        <div className='flex-grow p-4'>
            <h2 className='text-2xl uppercase mb-4 '>All Collections</h2>
            {/* Sort Option */}

            <SortOption/>

            {/* Product Grid */}
            <ProductGrid products={products}/>
        </div>
    </div>
  )
}

export default CollectionPage