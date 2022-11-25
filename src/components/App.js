import {BrowserRouter, Routes, Route } from "react-router-dom"
import GlobalStyle from "./GlobalStyle";
import Shop from "./Shop";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import NavBar from "./NavBar";


function App() {
  return (
  <BrowserRouter>
  <GlobalStyle/>
  <NavBar/>
  <Routes>
    <Route path="/" element={<Shop/>}/>
    <Route path="/login" element={<SignIn/>}/>
    <Route path="/cadastro" element={<SignUp/>}/>
  </Routes>
  </BrowserRouter>  
  
    );
}

export default App;
