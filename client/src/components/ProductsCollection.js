import React from "react";

import ProductCard from "./ProductCard";

function ProductsCollection({ products, setFavoriteProducts }) {
    // console.log(products)
    return (
        <div className="market-collection">
            <h2>Products</h2>
            <div className="product-collection">
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        addToFavorite={() => setFavoriteProducts(product)}
                    />
                ))}
            </div>
        </div>
    );
}
export default ProductsCollection;