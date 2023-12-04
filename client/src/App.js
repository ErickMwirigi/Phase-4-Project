import React, { useState, useEffect } from "react";
import Cover from "./components/Cover";
import ProductsPage from "./components/ProductsPage";
import './App.css';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import { Route , Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import AccountProfile from "./components/AccountProfile";
import ProfileSettings from "./components/ProfileSettings";
import Orders from "./components/Orders";
import Inbox from "./components/Inbox";
import FavoriteProducts from "./components/FavoriteProducts";



function App() {
  const productURL = "http://localhost:3000/products";
    
  // "http://127.0.0.1:5555/customers"

  const [products, setProducts] = useState([]);
  const [favoriteProducts, setFavoriteProducts] = useState([]);
  const [ isMember , setMember ] = useState(true)
  // const [productsDictionary, setProductsDictionary] = useState({});


  function fetchProductData() {
    fetch(productURL)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data)

        // const dictionary = {}

        // data.forEach(product => {
        //   dictionary[product.id] = product;

        // });

        setProducts(data);
        // setProductsDictionary(dictionary);

      });
  }
  useEffect(() => fetchProductData(), []);

  function setToFavoriteProducts(product) {
    if (favoriteProducts.includes(product)) {
        alert(`${product.name} has already been added to favorited`);
    }
    else {
        setFavoriteProducts((prevProducts) => [...prevProducts, product]);
    };
};

function removeFromFavorites(clickedProduct) {
    const remProducts = favoriteProducts.filter(
        (product) => product.id !== clickedProduct.id,
    );
    setFavoriteProducts(remProducts);
};

function onSearch(searched){

  const toDisplay = products.filter((item)=>item.name.includes(searched))
  setProducts(toDisplay)
}

  return (
    <div className='first-page'>
    <NavBar onSerach={onSearch}/>
      <Routes>
        <Route path="/" element={ isMember ? <LogIn /> : <SignUp />}/>
        <Route path="/login" element={ <LogIn />}/>
        <Route path="/products" element={<NavBar onSearch={onSearch}/>}>
          <Route index element={<ProductsPage products={products} setToFavorite={setToFavoriteProducts}/> }/>
        </Route>
          
          <Route path="MarketApp" element={ <Cover />}/>
        <Route path="/account" element={<AccountProfile/>}>
          <Route path="inbox" element={<Inbox />}/>
          <Route path="orders" element={<Orders />}/>
          <Route path="saved-items" element={ <FavoriteProducts favoriteProducts={favoriteProducts} removeFromFavorites={removeFromFavorites}/>}/>
          <Route path="profile-settings" element={<ProfileSettings />}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App;