import React from 'react'
import { useSearchParams } from 'react-router-dom'

function SortOption() {
    const [searchParams , setSearchParams]=useSearchParams();
    
    const handleSortChange=(e)=>{
        const sortBy= e.target.value;
        searchParams.set("SortBy", sortBy)
        setSearchParams(searchParams)
    }
  return (
    <div className='mb-4 flex items-center justify-end'>
        <select name="" id="sort"
        onChange={handleSortChange}
        value={searchParams.get("SortBy") || ""}
        className='border p-2 rounded-md focus:outline-none'>
            <option value="">Default</option>
            <option value="priceAsc">Price Low to High</option>
            <option value="priceDesc">Price High to Low</option>
            <option value="popularity">Popularity</option>
        </select>
    </div>
  )
}

export default SortOption