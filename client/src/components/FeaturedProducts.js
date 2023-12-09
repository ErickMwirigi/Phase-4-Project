import React from "react";
import FeaturedCards from "./FeaturedCard";

function FeaturedProducts({featured}){
    return(
        <div>
            <h2>Featured Products</h2>
            <div className="Featured">
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