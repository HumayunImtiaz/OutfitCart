
const checkout={
    _id:"12234",
    createAt: new Date(),
    checkoutItems: [
        {
            productId: "1",
            name: "Jacket",
            color: "Black",
            size: "M",
            price: 150,
            quantity: 1,
            image: "https://picsum.photos/500/500?random=1",
        },
         {
            productId: "2",
            name: "T-Shirt",
            color: "White",
            size: "L",
            price: 120,
            quantity: 2,
            image: "https://picsum.photos/500/500?random=2",
        },
    ],
    shippingAddress: {
        address: "123 Fasion Street",
        city: "New York",
        country: "USA"
    }
}
function OrderConfirmation() {

    const calculateEstimatesDelivery=(createAt)=>{
        const orderDate= new Date(createAt);
        orderDate.setDate(orderDate.getDate() + 10);  //add 10 days to the order date
        return orderDate.toLocaleDateString();
    }
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
        <h1 className="text-4xl font-bold text-center text-emerald-700 mb-8">
            Thank You for Your Order
        </h1>

        {
            checkout &&(
                <div className="p-6 rounded-lg border">
                    <div className="flex justify-between mb-20">
                        {/* Order Id and Date */}
                        <div>
                            <h2 className="text-xl font-semibold">
                                Order ID: {checkout._id}
                            </h2>
                            <p className="text-gray-500">
                                Order Date: {new Date(checkout.createAt).toLocaleDateString()}
                            </p>
                        </div>

                        {/* Estimated Delivery */}
                        <div>
                            <p className="text-emerald-700 text-sm">
                                Estimated Delivery: {calculateEstimatesDelivery(checkout.createAt)}
                            </p>
                        </div>
                    </div>

                    {/* Ordered Items */}
                    <div className="mb-20">
                         {
                        checkout.checkoutItems.map((item)=>(
                            <div key={item.productId} 
                                 className="flex items-center">
                                    <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-md mr-4" />
                                    <div>
                                        <h4 className="text-md font-semibold">{item.name}</h4>
                                        <p className="text-sm text-gray-500 ">
                                            {item.color} | {item.size}
                                        </p>
                                    </div>
                                    <div className="ml-auto text-right ">
                                    <p className="text-md">${item.price}</p>
                                    <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                                    </div>
                                 </div>
                        ))
                    }

                    </div>

                </div>
            )
        }
    </div>
  )
}

export default OrderConfirmation