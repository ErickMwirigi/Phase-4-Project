import ProductsCollection from "./ProductsCollection";
import React from "react";
import SideBar from './SideBar'
import FeaturedProducts from "./FeaturedProducts";
import { Route ,Routes } from "react-router-dom";
import UserComment from "./userComment";

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
            <Routes>
                <Route path="/comments" element={<UserComment />} />
            </Routes>
        </div>
    );
}
export default ProductsPage