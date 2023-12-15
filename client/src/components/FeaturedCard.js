import React from "react";
import { Link } from "react-router-dom";

function FeaturedCards({featured}){

    

    return(
        <>
        <div>
            <Link to={`/products/featured/${featured.id}`}>
                <img src={featured.imageUrl} alt="Product" className="featured-images"/>
            </Link>
            <h4>{featured.name}</h4>
        </div>
        </>
    )
}

export default FeaturedCards;
