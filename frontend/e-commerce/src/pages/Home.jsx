import React from 'react'
import Hero from '../components/Layout/Hero'
import  GenderCollectionSection  from '../components/Products/GenderCollectionSection'
import NewArrive from '../components/Products/NewArrive'
import ProductDetails from '../components/Products/ProductDetails'
import ProductGrid from '../components/Products/ProductGrid'
import FeatureCollection from '../components/Products/FeatureCollection'
import FeatureSection from '../components/Products/FeatureSection'

//  similar product data for ProductsGrid.jsx

const similarProducts=[
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
   
]

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
        {/* Products Details and add add productGrid.jsx within */}
        <ProductDetails/>

        {/* Top WomenCollection */}
        <div className='container mx-auto'>
          <h2 className='text-3xl text-center font-bold mb-4'>
            Top Wears For Women
          </h2>
          <ProductGrid products={similarProducts}/>
        </div>

        {/* Feature Collection component */}
        <FeatureCollection/>

        {/* Feature Section Component */}
        <FeatureSection/>

    </div>
  )
}

export default Home