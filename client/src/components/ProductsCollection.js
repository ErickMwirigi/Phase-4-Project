import React from "react";

import ProductCard from "./ProductCard";

function ProductsCollection({ products, setFavorite }) {
  // console.log(products)
  return (
    <div className="market-collection">
      <div className="product-collection">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToFavorite={() => setFavorite(product)}
          />
        ))}
      </div>
    </div>
  );
}
export default ProductsCollection;
