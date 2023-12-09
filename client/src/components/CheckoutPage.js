import React from "react";

function CheckoutPage({orders}){

    return(
        <>
        <div>
            <h2>Checkout</h2>
            <div>
                <div>
                    <h4>Items</h4>
                </div>
                <div>
                    <h4>Order ID: </h4>
                    <h4>Date Created: </h4>
                    <div>
                        <h5>Quantity</h5>
                        <h5>Price</h5>
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
        
        </>
    )

}

export default CheckoutPage