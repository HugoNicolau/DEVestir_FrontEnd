import {BrowserRouter, Routes, Route } from "react-router-dom"
import GlobalStyle from "./GlobalStyle";
import Shop from "./Shop";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import NavBar from "./NavBar";
import Item from "./Item";
import AddItem from "./AddItem";
import { useState } from "react";
import { TokenContext } from "./TokenContext";


function App() {
  const [token, setToken] = useState("");
  const [userName, setUserName] = useState("");
  const [cartItems, setCartItems] = useState([]);

  return (
  <TokenContext.Provider value={{token,setToken, userName, setUserName, cartItems, setCartItems}}>

  <BrowserRouter>
  <GlobalStyle/>
  <NavBar/>
  <Routes>
    <Route path="/" element={<Shop/>}/>
    <Route path="/login" element={<SignIn/>}/>
    <Route path="/cadastro" element={<SignUp/>}/>
    <Route path="/add" element={<AddItem/>}/>
    <Route path="/:id" element={<Item/>}/>
  </Routes>
  </BrowserRouter>  
  
  </TokenContext.Provider>
    );
}

export default App;
