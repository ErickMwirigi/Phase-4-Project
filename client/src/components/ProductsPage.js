// import Searchbar from "./Searchbar";
import ProductsCollection from "./ProductsCollection";
import FavoriteProducts from "./FavoriteProducts";
import Searchbar from "./Searchbar";
import React, { useState } from "react";


function ProductsPage({ products, favoriteProducts, setFavoriteProducts }) {
    const [ search, setSearch] = useState()
    const [ display, setDisplay] = useState(products)

    function onSearch(searched){
        const toDisplay = products.filter((item)=>item.name.includes(searched))
        // setSearch(searched)
        setDisplay(toDisplay)
        console.log(toDisplay)
        // console.log(products.filter((item)=> item.name.includes(searched)))
    }
    // function productDisplay(){
    //     setDisplay(products)
    //     console.log(display)
    //     return display
    // }

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
                    products={display}
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