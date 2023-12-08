import React from "react";

function FavoriteCard({ product, remove }) {
    return (
        <div className="fav-product-cards">
            <div className="fav-product-details">
                <img className="fav-image" src={product.imageUrl} alt="product cover" />
                <h3 className="heading-h3">{product.name}</h3>
                <h4 className="heading-h4">{product.price}</h4>
                <div className="remove-fav">
                    <button onClick={remove} className="remove-fav-btn">
                        Remove from Favorites
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FavoriteCard;