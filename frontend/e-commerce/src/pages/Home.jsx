import React from 'react'
import Hero from '../components/Layout/Hero'
import  GenderCollectionSection  from '../components/Products/GenderCollectionSection'
import NewArrive from '../components/Products/NewArrive'

function Home() {
  return (
    <div>
        <Hero/>
        <GenderCollectionSection/>
        <NewArrive/>
    </div>
  )
}

export default Home