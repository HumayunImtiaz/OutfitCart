import React from 'react'

function CartContent() {
    const CartProducts=[
        {
            productId:1,
            name:"T-Shirt",
            size:"M",
            color:"Red",
            quantity:1,
            price: 15,
            Image:"https://picsum.photos/200?random=1" // get image from pecsum.photo website for rendom image  
        },
        {
            productId:2,
            name:"Jeans",
            size:"L",
            color:"blue",
            quantity:1,
            price: 15,
            Image:"https://picsum.photos/200?random=2" // get image from pecsum.photo website for rendom image  
        },
    ]
  return (
    <div>
        
        {
            CartProducts.map((product, index)=>(
                <div key={index}
                className='flex items-start justify-between py-4 border-b'
                >
                    <div className='flex items-start'>
                        <img src={product.Image} alt={product.name}
                        className='w-20 h-24 object-cover mr-4 rounded'
                        />
                        <div>
                            <h3>{product.name}</h3>
                            <p className='text-sm text-gray-500'>
                                size: {product.size} | color: {product.color}
                            </p>
                            <div className='flex items-center mt-2'>
                                <button className='border rounded px-2 py-1 text-xl font-medium'>
                                    -
                                </button>
                                <span className='mx-4'>{product.quantity}</span>
                                <button className='border rounded px-2 py-1 text-xl font-medium'>
                                    +
                                </button>

                            </div>
                        </div>
                        

                    </div>

                </div>
            ))
        }
    </div>
  )
}

export default CartContent