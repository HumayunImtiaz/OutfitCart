import React from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'

function NewArrive() {
    const newArrivals=[
        {
            _id:"1",
            name:"Stylish Jacket",
            price:"120",
            Image:[
                {
                    url:"https://picsum.photos/500/500?/random=1",
                    alrText:'Stylish Jacket',
                }
            ]

        },
        {
            _id:"2",
            name:"Stylish Jacket",
            price:"120",
            Image:[
                {
                    url:"https://picsum.photos/500/500?/random=2",
                    alrText:'Stylish Jacket',
                }
            ]

        },
        {
            _id:"3",
            name:"Stylish Jacket",
            price:"120",
            Image:[
                {
                    url:"https://picsum.photos/500/500?/random=3",
                    alrText:'Stylish Jacket',
                }
            ]

        },
        {
            _id:"4",
            name:"Stylish Jacket",
            price:"120",
            Image:[
                {
                    url:"https://picsum.photos/500/500?/random=4",
                    alrText:'Stylish Jacket',
                }
            ]

        },
        {
            _id:"5",
            name:"Stylish Jacket",
            price:"120",
            Image:[
                {
                    url:"https://picsum.photos/500/500?/random=5",
                    alrText:'Stylish Jacket',
                }
            ]

        },
        {
            _id:"6",
            name:"Stylish Jacket",
            price:"120",
            Image:[
                {
                    url:"https://picsum.photos/500/500?/random=6",
                    alrText:'Stylish Jacket',
                }
            ]

        },
        {
            _id:"7",
            name:"Stylish Jacket",
            price:"120",
            Image:[
                {
                    url:"https://picsum.photos/500/500?/random=7",
                    alrText:'Stylish Jacket',
                }
            ]

        },
        {
            _id:"8",
            name:"Stylish Jacket",
            price:"120",
            Image:[
                {
                    url:"https://picsum.photos/500/500?/random=8",
                    alrText:'Stylish Jacket',
                }
            ]

        },

    ]
  return (
    <section>
        <div className='container mx-auto text-center mb-10 relative '>
            <h2 className='text-3xl font-bold mb-4'>
                 Explore New Arrivals
            </h2>
            <p className='text-lg text-gray-600 mb-8'>
                Discover the latest styles straight off the runway, freshly added to keep yoyr wardrop on the cutting edge of fashion
            </p>
            {/* Scroll Button */}
            <div className='absolute right-0 bottom-[-30px] flex space-x-2 '>
              <button className='p-2 rounded border bg-white text-black'>
                <FiChevronLeft className='text-2xl'/>
              </button>
              <button className='p-2 rounded border bg-white text-black'>
                <FiChevronRight className='text-2xl'/>
              </button>
            </div>
        </div>
        {/* Scrollable Content */}
        <div className='container mx-auto overflow-x-scroll flex space-x-6 realtive'>
         {
            newArrivals.map((products)=>(
                <div key={products._id}>
                    <img src={products.Image[0]?.url} 
                    alt={products.Image[0]?.alrText ||products.name }/>
                    <div className='absolute bottom-0 left-0 right-0 backdrop-blur-md bg-opacity-50 text-whitep-4 rounded-b-lg'>
                        <Link to={`/product/${products._id}`} className='block'>
                        <h4 className='font-medium '>{products.name}</h4>
                        <p className='mt-1'>{products.price}</p>
                        </Link>

                    </div>

                </div>
            ))
         }
        </div>

    </section>
  )
}

export default NewArrive