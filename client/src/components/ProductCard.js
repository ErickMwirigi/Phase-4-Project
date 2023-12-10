import React from "react";
import { Link } from "react-router-dom";
import { strToPrice } from "shared/helpers";

function ProductCard({ product, addToFavorite }) {
  return (
    <div className="product-cards">
      <div className="product-image">
        <img
          src={product.imageUrl}
          alt="product-cover"
          style={{
            height: "auto",
            width: "200px",
          }}
        />
        <h3>{product.name}</h3>
        <h4>{strToPrice(product.price)}</h4>
        <p>{product.category}</p>
      </div>
      <div className="view-add-btns">
        <button className="productButton">
          <Link to={`/products/${product.id}`}>View Product</Link>
        </button>
        <button onClick={addToFavorite} className="productButton">
          Add to Favorites
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
