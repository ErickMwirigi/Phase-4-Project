import React from "react";

export default function Orders({ cart }) {

  console.log(cart)
//   fetch(ordersURL,{
//     method:"POST",
//     headers:{
//       "Content-Type":"application/json"
//     },
//     body:JSON.stringify({
//       "item_id": product.id,
//       "price": product.price,
//       "status":"order-set",
//       "customer_id": user.id
//     })
// })
// .then(response => response.json())
// .then(data => console.log(data))

  return(
  <>
    <div>Orders</div>
    <div className="orders-list">
    {cart.map((item)=>{
      return <li key={item.id}>{item.name}</li>
    })}
    </div>
  </>
  )
}
