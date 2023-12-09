import React from "react";

function FeaturedProducts({featured}){
    return(
        <div>
            <h2>Featured Products</h2>
            <div className="Featured">
                <img src={featured.image_url} alt="Product"/>
                <h2>{featured.name}</h2>
            </div>
        </div>
    )

}

export default FeaturedProducts