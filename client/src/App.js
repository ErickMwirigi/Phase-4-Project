import React, { useState, useEffect } from "react";
import Cover from "./components/Cover";
import ProductsPage from "./components/ProductsPage";
import './App.css';
import LogIn from './LogIn';
import SignUp from './SignUp';

// http://localhost:3000/products
function App() {
  const productURL = "http://127.0.0.1:5000/items";

  const [products, setProducts] = useState([]);
  const [favoriteProducts, setFavoriteProducts] = useState([]);
  const [productsDictionary, setProductsDictionary] = useState({});


  function fetchProductData() {
    fetch(productURL)
      .then((response) => response.json())

            .then((data) => {
           console.log(data)
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
    <div className='first-page'>
      <Cover />
      <LogIn />
      <SignUp />
      <ProductsPage products={products} favoriteProducts={favoriteProducts} setFavoriteProducts={setFavoriteProducts} />

    </div>
  )
}

export default App;