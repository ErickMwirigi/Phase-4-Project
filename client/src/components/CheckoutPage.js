import React from "react";

function CheckoutPage({ order }){

    const ordersURL = "http://127.0.0.1:5555/orders";

    function Checkout() {
       order.map((item)=> {
        console.log(item)
            fetch(ordersURL,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                    },
                body:JSON.stringify(item)
            })
            .then(response => response.json())
            .then(data => console.log(data))
        })
      }

    return(
        <>
        <div className="checkout">
            <h2>Checkout</h2>
            <div className="itemsOrder">
                <div>
                    <h4>Items</h4>
                </div>
                <div className="orderdetails">
                    <h4>Order ID: </h4>
                    <h4>Date Created: </h4>
                        <div>
                            <h5>Quantity</h5>
                            <h5>Price: </h5>
                        </div>
                </div>
            </div>
            <div>
                <h4>Order Summary</h4>
                <div>
                    <h5>Total Price</h5>
                </div>
                <div>
                    <button onClick={()=>Checkout()}>Checkout</button>
                </div>
            </div>
        </div>
        </>
    )
}
export default CheckoutPage;