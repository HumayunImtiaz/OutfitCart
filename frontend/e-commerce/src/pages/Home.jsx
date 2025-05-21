import React from 'react'
import Hero from '../components/Layout/Hero'
import  GenderCollectionSection  from '../components/Products/GenderCollectionSection'
import NewArrive from '../components/Products/NewArrive'
import ProductDetails from '../components/Products/ProductDetails'

function Home() {
  return (
    <div>
        <Hero/>
        <GenderCollectionSection/>
        <NewArrive/>
        {/* Best Seller */}
        <h2 className='text-3xl text-center font-bold mb-4'>
          Best Seller
        </h2>
        <ProductDetails/>
    </div>
  )
}

export default Home