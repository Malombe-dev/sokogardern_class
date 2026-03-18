import React from 'react'
import { useLocation } from 'react-router-dom';

const MpesaPayment = () => {
  //We Receive the product in Makepayment
    //We use useLocation to receive the product
    const {product} = useLocation().state || {};
    //console.log("Res: "+product.product_name)
  return (
    <div>
      <h1>mpesa MpesaPayment page</h1>
      <div>
            <h1>LIPA NA MPESA</h1>
            {/* Bind product name and Cost */}
            <p>Product NAME: {product.product_name}</p>  
            <p>Product Cost: {product.product_cost}</p>
      
        </div>
    </div>
  )
}

export default MpesaPayment
