import React from "react";
import CheckoutDetails from "./CheckoutDetails";

function CheckoutPage({orders}){

    return(
        <div className="checkout">
            {orders.map(order => (
                <CheckoutDetails
                    key={order.id}
                    orders={order}
                />
            ))}
        </div>
    )

}
export default CheckoutPage