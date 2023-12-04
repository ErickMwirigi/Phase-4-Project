import ProductsCollection from "./ProductsCollection";
import Searchbar from "./Searchbar";
import React from "react";


function ProductsPage({ products, setToFavorite , searchData}) {

    function onSearch(searched){

        const toDisplay = products.filter((item)=>item.name.includes(searched))
        searchData(toDisplay)
    }

    return (
        <>
            <Searchbar searched={onSearch}/>
            <div className="products">
                <ProductsCollection
                    products={products}
                    setFavorite={setToFavorite}
                />
            </div>
        </>
        
    );



}
export default ProductsPage