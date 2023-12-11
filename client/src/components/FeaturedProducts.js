import React from "react";
import FeaturedCards from "./FeaturedCard";

function FeaturedProducts({featured}){
    return(
        <div className="featured"> 
            <h2>Featured Products:</h2>
            <div className="featuredCards">
                {featured.map(product => (
                    <FeaturedCards
                        key={product.id}
                        featured={product}
                        
                    />
                ))}
            </div>
        </div>
    )

}

export default FeaturedProducts