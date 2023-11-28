import React from "react";

import ProductCard from "./ProductCard";

function ProductsCollection({}) {
    return (
        <div className="market-collection">
            <h2>Products</h2>
            <div className="product-collection">
                {albums.map((album) => (
                    <ProductCard
                        key={album.id}
                        album={album}
                        addToFavorite={() => setFavoriteAlbums(album)}
                    />
                ))}
            </div>
        </div>
    );
}
export default ProductsCollection;