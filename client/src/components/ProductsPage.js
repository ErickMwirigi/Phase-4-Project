import ProductsCollection from "./ProductsCollection";
import React from "react";
import SideBar from './SideBar'
import FeaturedProducts from "./FeaturedProducts";

function ProductsPage({ products, setToFavorite }) {

    return (
        <div className="main-page">
            <SideBar />
            <FeaturedProducts products={products} />
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