import React from "react";

function CheckoutDetails({orders}){

    return(
        <>
        <div className="checkout">
            <h2>Checkout</h2>
            <div className="trial">
            <div className="itemsOrder">
                <h4>Items:</h4>
                <div className="orderdetails">
                    <h4>Order ID: {orders.id}</h4>
                    <h4>Date Created: {orders.created_at}</h4>
                        <div>
                            <h5>Quantity:</h5>
                            <h5>Price: {orders.price}</h5>
                        </div>
                </div>
            </div>
            <div>
                <h4>Order Summary</h4>
                <div>
                    <h5>Total Price</h5>

                </div>
                <div>
                    <button>Checkout</button>
                </div>
            </div>
            </div>
        </div>
        
        </>
    )

}

export default CheckoutDetails