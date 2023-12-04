import React, { useState, useEffect } from "react";
import Cover from "./components/Cover";
import ProductsPage from "./components/ProductsPage";
import './App.css';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import { Route , Routes } from "react-router-dom";
import AccountProfile from "./components/AccountProfile";
import ProfileMenu from "./components/ProfileMenu";
import ProfileSettings from "./components/ProfileSettings";
import Orders from "./components/Orders";
import Inbox from "./components/Inbox";
import FavoriteProducts from "./components/FavoriteProducts";



function App() {
  const productURL = "http://localhost:3000/products";
    
  // "http://127.0.0.1:5555/customers"

  const [products, setProducts] = useState([]);
  const [favoriteProducts, setFavoriteProducts] = useState([]);
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

  return (
    <div className='first-page'>
      <Routes>
        <Route path="/" element={<ProductsPage products={products} searchData={setProducts} setToFavorite={setToFavoriteProducts} />}/>
        <Route path="/login" element={<LogIn />}/>
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/cover" element={ <Cover />}/>
      </Routes>
    </div>
  )
}

export default App;