import React, { useState, useEffect } from "react";
import Erick from "./Erick";
import Cover from "./components/Cover";
import ProductsPage from "./components/ProductsPage";

import './App.css';

const productURL = "http://localhost:3000/products";

function App() {
  const [products, setProducts] = useState([]);
  const [favoriteProducts, setFavoriteProducts] = useState([]);
  const [productsDictionary, setProductsDictionary] = useState({});



  function fetchProductData() {
    fetch(productURL)
      .then((response) => response.json())
      .then((data) => {

        const dictionary = {}

        data.forEach(product => {
          dictionary[product.id] = product;

        });

        setProducts(data);
        setProductsDictionary(dictionary);

      });
  }
  useEffect(() => fetchProductData(), []);
  return (
    <div>
      {/* <Erick /> */}
      <Cover />
      <ProductsPage products={products} favoriteProducts={favoriteProducts} setFavoriteProducts={setFavoriteProducts} />

    </div>
  );
}

export default App;
