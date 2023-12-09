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
import FavoriteProducts from "./components/FavoriteProduct";
import LogIn from './components/LogIn'
import SignUp from "./components/SignUp";
import CheckoutPage from "./components/CheckoutPage";
import ProductDetailsCard from "./components/ProductDetailsCard";

function App() {

  const productURL = "http://127.0.0.1:5555/items";
  const ordersURL = "http://127.0.0.1:5555/orders"

  const [products, setProducts] = useState([]);
  const [favoriteProducts, setFavoriteProducts] = useState([]);
  const [featuredProducts, setFeaturedProducts] = useState([])
  const [orders, setOrders] = useState([])
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

        const featured = data.slice(4,10) 

        setProducts(data);
        setProductsDictionary(dictionary);
        setFeaturedProducts(featured)

      });
  }

  function fetchActiveUser(){
    fetch("http://127.0.0.1:5555/active-session")
    .then((response) => response.json())
    .then((data) => console.log(data))
  }

  function fetchFavs(){
    fetch("http://127.0.0.1:5555/favorites")
    .then((response) => response.json())
    .then((data) => setFavoriteProducts(data))
  }

  useEffect(() => fetchProductData(), [])
  useEffect(() => fetchActiveUser(), [])
  useEffect(() => fetchFavs(), [])

  function setToFavoriteProducts(item) {
  
    if (favoriteProducts.includes(item.id)) {
      alert(`${item.name} has already been added to favorited`)
    }
    else {
      fetch("http://127.0.0.1:5555/favorites",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          "customer_id": isMember.id,
          "item_id":item.id
        })
    })
    .then((response) => response.json())
    .then((favs) => setFavoriteProducts(favs));
    }
}

function removeFromFavorites(item) {
    fetch(`http://127.0.0.1:5555/favorites/${item.id}`,{
      method:"DELETE",
      headers:{
        "Content-Type":"application/json"
      },
    })
    .then((response) => response.json())
    .then(() =>{ 
      const remProducts = favoriteProducts.filter(
        (product) => product.id !== item.id,
    );
    setFavoriteProducts(remProducts)}
)};

function Checkout(){
  fetch(productURL)
  .then(res => res.json())
  .then(data => data.map(order =>(
    setOrders(order)
  )))
}




  return (
      <Routes>
        <Route path="/" element={<NavBar onSearch={products} userData={isMember}/>}>
          <Route path="buy-items" element={ <Cover />}/>
          <Route index element={<ProductsPage products={products} setToFavorite={setToFavoriteProducts}/> }/>
          <Route path="products" element={<ProductsPage products={products} setToFavorite={setToFavoriteProducts} fProducts={featuredProducts}/> }/>
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
        <Route path="/checkout" element={<CheckoutPage orders={orders}/>}/>
      </Routes>
  )
}

export default App;