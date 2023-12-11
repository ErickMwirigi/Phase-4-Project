import React from "react";

function FeaturedCards({featured}){
    return(
        <>
        <div>
            <img src={featured.imageUrl} alt="Product" className="featured-images" />
            <h4>{featured.name}</h4>
        </div>
        </>
    )
}

export default FeaturedCards