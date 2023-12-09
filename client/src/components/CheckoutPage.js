import React from "react";

function CheckoutPage({ orders }) {

    return (
        <>
            <div className="checkout">
                <h2>Checkout</h2>
                <div className="itemsOrder">
                    <div>
                        <h4>Items</h4>
                    </div>
                    <div className="orderdetails">
                        <h4>Order ID: {orders.id}</h4>
                        <h4>Date Created: {orders.name}</h4>
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