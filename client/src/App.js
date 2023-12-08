import React, { useState, useEffect } from "react";
import Cover from "./components/Cover";
import ProductReviewPage from "./components/ProductReviewPage";
import ProductsPage from "./components/ProductsPage";
import './App.css';
import { Route , Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import AccountProfile from "./components/AccountProfile";
import ProfileSettings from "./components/ProfileSettings";
import Orders from "./components/Orders";
import Inbox from "./components/Inbox";
import FavoriteProducts from "./components/FavoriteProducts";
import LogIn from './components/LogIn'
import SignUp from "./components/SignUp";
import ProductDetailsCard from "./components/ProductDetailsCard";

function App() {

  const productURL = "http://127.0.0.1:5555/items";

  const [products, setProducts] = useState([]);
  const [favoriteProducts, setFavoriteProducts] = useState([]);
  const [ isMember , setMember ] = useState('')
  const [productsDictionary, setProductsDictionary] = useState({});
  const [commentsDictionary, setCommentsDictionary] = useState({});
  const [cart, setCart] = useState([]);


  function fetchProductData() {
    fetch(productURL)
      .then((response) => response.json())
      .then((data) => {

        const dictionary = {};
        const commentsDict = {};

        data.forEach(product => {
          dictionary[product.id] = product;
          commentsDict[product.id] = []

        });

        setProducts(data);
        setProductsDictionary(dictionary);

      });
  }

  function fetchActiveUser(){
    fetch("http://127.0.0.1:5555/active-session")
    .then((response) => response.json())
    .then((data) => console.log(data))
  }
  useEffect(() => fetchProductData(), [])
  useEffect(() => fetchActiveUser(), [])

  function setToFavoriteProducts(product) {
    if (favoriteProducts.includes(product)) {
        alert(`${product.name} has already been added to favorited`);
    }
    else {
        setFavoriteProducts((prevProducts) => [...prevProducts, product]);
    };
}

function removeFromFavorites(clickedProduct) {
    const remProducts = favoriteProducts.filter(
        (product) => product.id !== clickedProduct.id,
    );
    setFavoriteProducts(remProducts);
};

  return (
      <Routes>
        <Route path="/" element={<NavBar onSearch={products} userData={isMember}/>}>
          <Route path="buy-items" element={ <Cover />}/>
          <Route index element={<ProductsPage products={products} setToFavorite={setToFavoriteProducts}/> }/>
          <Route path="products" element={<ProductsPage products={products} setToFavorite={setToFavoriteProducts}/> }/>
          <Route path="/products/:productId" element={<ProductDetailsCard products={products}/>}/>
        </Route>
        <Route path="/login" element={ <LogIn onLogIn={setMember}/>}/>
        <Route path="/signup" element={ <SignUp />}/>
        <Route path="/products-review" element={<ProductReviewPage products={products} productsDictionary={productsDictionary} commentsDictionary={commentsDictionary} setCommentsDictionary={setCommentsDictionary} />}/>
        <Route path="/account" element={<AccountProfile  userData={isMember} itemCount={cart}/>}>
          <Route index element={<AccountProfile  userData={isMember} itemCount={cart}/>}/>
          <Route path="inbox" element={<Inbox />}/>
          <Route path="orders" element={<Orders />}/>
          <Route path="saved-items" element={ <FavoriteProducts favoriteProducts={favoriteProducts} removeFromFavorites={removeFromFavorites}/>}/>
          <Route path="profile-settings" element={<ProfileSettings userData={isMember}/>}/>
        </Route>
      </Routes>
  )
}

export default App;