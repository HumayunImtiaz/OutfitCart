import {PayPalScriptProvider, PayPalButtons} from "@paypal/react-paypal-js";

function PaypalButton({amount, onSuccess, onError}) {
  return (

    <PayPalScriptProvider options={{"client-id":
     "AXtihYIIXW6LKK-R9i_btTOlLmQO96NIEVaupOYWXzvr0nblukC4ggQ6-bqVj5pUWcUg-TroPfZegjUh"}}>
        <PayPalButtons 
        style={{layout: "vertical"}}
        createOrder={(data, actions)=>{
            return actions.order.create({
                purchase_units: [{amount: {value: amount}}]
            })
        }}
        onApprove={(data, actions)=>{
            return actions.order.capture().then(onSuccess)
        }}
        onError={onError}/>
     </PayPalScriptProvider>
  )
}

export default PaypalButton