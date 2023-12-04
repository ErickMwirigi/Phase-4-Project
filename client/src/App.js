import React, { useState, useEffect } from "react";
import Cover from "./components/Cover";
import ProductReviewPage from "./components/ProductReviewPage";
import ProductsPage from "./components/ProductsPage";
import './App.css';
import LogIn from './LogIn';
import SignUp from './SignUp';
// import Navigation from "./components/Navigation";

// http://localhost:3000/products
// http://127.0.0.1:5000/items
function App() {
  const productURL = "http://localhost:3000/products";

  const [products, setProducts] = useState([]);
  const [favoriteProducts, setFavoriteProducts] = useState([]);
  const [productsDictionary, setProductsDictionary] = useState({});
  const [commentsDictionary, setCommentsDictionary] = useState({});


  function fetchProductData() {
    fetch(productURL)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        const dictionary = {}
        // const dictionary = {}
        const commentsDict = {}


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