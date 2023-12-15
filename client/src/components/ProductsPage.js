import ProductsCollection from "./ProductsCollection";
import React from "react";
<<<<<<< HEAD
import SideBar from './SideBar'


function ProductsPage({ products, setToFavorite }) {

    return (
        <div className="mainPage">
            <div className="sidebar">
                <SideBar />
            </div>
            <div className="products">
                <ProductsCollection
                    products={products}
                    setFavorite={setToFavorite}
                />
            </div>
        </div>

    );


=======
import SideBar from "./SideBar";
// import FeaturedProducts from "./FeaturedProducts";
>>>>>>> b701189f75562c47fdcd9cb2ae8507926789c86e

function ProductsPage({ products, setToFavorite, fProducts }) {
  return (
    <div className="main-page">
      <SideBar />
      <div className="products">
        <ProductsCollection products={products} setFavorite={setToFavorite} />
      </div>
    </div>
  );
}
export default ProductsPage;
