// import Searchbar from "./Searchbar";
import ProductsCollection from "./ProductsCollection";
import FavoriteProducts from "./FavoriteProducts";
import Searchbar from "./Searchbar";
import React from "react";


function ProductsPage({ products, favoriteProducts, setFavoriteProducts , searchData}) {

    function onSearch(searched){

        const toDisplay = products.filter((item)=>item.name.includes(searched))
        searchData(toDisplay)
    }

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
        <>
            <Searchbar searched={onSearch}/>
            <div className="products">
                <ProductsCollection
                    products={products}
                    setFavoriteProducts={setToFavoriteProducts}
                />
                <FavoriteProducts
                    favoriteProducts={favoriteProducts}
                    removeFromFavorites={removeFromFavorites}
                />
            </div>
        </>
        
    );



}
export default ProductsPage