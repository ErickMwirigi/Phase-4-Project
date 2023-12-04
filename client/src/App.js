import React, { useState, useEffect } from "react";
import Cover from "./components/Cover";
import ProductReviewPage from "./components/ProductReviewPage";
import ProductsPage from "./components/ProductsPage";
import './App.css';
import LogIn from './LogIn';
import SignUp from './SignUp';
// import Navigation from "./components/Navigation";

// http://localhost:3000/products
function App() {
  const productURL = "http://127.0.0.1:5000/items";

  const [products, setProducts] = useState([]);
  const [favoriteProducts, setFavoriteProducts] = useState([]);
  const [productsDictionary, setProductsDictionary] = useState({});
  const [commentsDictionary, setCommentsDictionary] = useState({});


  function fetchProductData() {
    fetch(productURL)
      .then((response) => response.json())


        const dictionary = {};
        const commentsDict = {};

            .then((data) => {
           console.log(data)
        const dictionary = {}


        data.forEach(product => {
          dictionary[product.id] = product;
          commentsDict[product.id] = []

        });

        setProducts(data);
        setProductsDictionary(dictionary);

      });
  }
  useEffect(() => fetchProductData(), []);

  useEffect(() => {
    const commentsDict = {}
    products.forEach(product => {
      commentsDict[product.id] = [];

    });


    setCommentsDictionary(commentsDict);
  }, [products])

  return (
    <div className='first-page'>

      {/* <Navigation /> */}
      <Cover />
      <LogIn />
      <SignUp />
      <ProductReviewPage products={products} productsDictionary={productsDictionary} commentsDictionary={commentsDictionary} setCommentsDictionary={setCommentsDictionary} />

      <ProductsPage products={products} favoriteProducts={favoriteProducts} setFavoriteProducts={setFavoriteProducts} />

    </div>
  )
}

export default App;