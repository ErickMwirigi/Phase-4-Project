import React from "react";
import { Link } from "react-router-dom";

function FeaturedCards({featured}){

    function handleclick(){
        return <Link to={`/products/${featured.id}`}></Link>
    }


    return(
        <>
        <div>
            <img 
                src={featured.imageUrl} alt="Product" className="featured-images" 
                onClick={handleclick}
            />
            <h4>{featured.name}</h4>
        </div>
        </>
    )
}

export default FeaturedCards