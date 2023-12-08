import ProductsCollection from "./ProductsCollection";
import React from "react";
import SideBar from './SideBar'


function ProductsPage({ products, setToFavorite }) {

    return (
        <div className="main-page">
            <SideBar />
            <div className="products">
                <ProductsCollection
                    products={products}
                    setFavorite={setToFavorite}
                />
            </div>
        </div>
        
    );



}
export default ProductsPage