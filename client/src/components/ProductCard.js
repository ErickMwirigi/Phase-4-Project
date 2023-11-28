import React from "react";

function ProductCard({product, addToFavorite}) {
    return (
        <div className="product-cards">
            <div className="product-image">
                <img src={product.image_url} alt="product-cover" />
                <h3>{product.name}</h3>
                <h4>{product.price}</h4>
                <p>{product.category}</p>
                <div className="view-add-btns">
                    <button className="productButton">View Product</button>
                    <button onClick={addToFavorite} className="productButton">
                        Add to Favorites
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard