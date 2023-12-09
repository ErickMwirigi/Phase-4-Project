import ProductsCollection from "./ProductsCollection";
import React from "react";
import SideBar from './SideBar'
import FeaturedProducts from "./FeaturedProducts";

function ProductsPage({ products, setToFavorite, fProducts }) {

    return (
        <div className="mainPage">
            <div className="sidebar">
                <SideBar />                
            </div>

            <div>
                <FeaturedProducts 
                    featured={fProducts}
                />
            </div>
            
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