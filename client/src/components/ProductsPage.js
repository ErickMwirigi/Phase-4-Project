import React from "react";

import ProductsCollection from "./ProductsCollection";


function ProductsPage({ products, favoriteProducts, setFavoriteProducts }) {

    function setToFavoriteProducts(product) {
        if (favoriteProducts.includes(product)) {
            alert(`${product.name} has already been added to favorited`);
        }
        else {
            setFavoriteProducts((prevProducts) => [...prevProducts, product]);
        };
    };

    function removeFromFavorites(clickedProduct) {
        const remProducts = favoriteProducts.filter(
            (product) => product.id !== clickedProduct.id,
        );
        setFavoriteProducts(remProducts);
    };

    return (
        <div className="products">
            {/* <Searchbar /> */}
            <ProductsCollection
                products={products}
                setFavoriteProducts={setToFavoriteProducts}
            />
            <FavoriteAlbums
                favoriteProducts={favoriteProducts}
                removeFromFavorites={removeFromFavorites}
            />
        </div>
    );



}
export default ProductsPage