import React from "react";
import { Link, Route, Routes, useNavigate, useParams } from "react-router-dom";
import ProductDetailsCard from "./ProductDetailsCard";

function ProductCard({ product, addToFavorite }) {
    
    // const navigate = useNavigate()
    // const params  = useParams()
    // const productId = params.productId
   

    function viewProduct(){
        // navigate(`:${productId}`)
        console.log() 
    }

    return (
        <div className="product-cards">
            <div className="product-image">
                <img src={product.imageUrl} alt="product-cover" style={{"height": "auto",
                    "width": "200px"}}/>
                <h3>{product.name}</h3>
                <h4>{product.price}</h4>
                <p>{product.category}</p>
                <div className="view-add-btns">
                    <button className="productButton"><Link to={"/products"}>View Product</Link></button>
                    <button onClick={addToFavorite} className="productButton">
                        Add to Favorites
                    </button>
                </div>
            </div>
            <Routes>
                <Route path="/productId" element={<ProductDetailsCard />}/>

            </Routes>
        </div>
    )
}

export default ProductCard