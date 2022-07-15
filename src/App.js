import './App.css';
import React from 'react';
import Navbar from './compontents/navbar';
import Home from './compontents/home';
import Footer from './compontents/footer';
import Signup from './compontents/sing/signup';
import Signin from './compontents/sing/sign-in';


import { Route, Routes } from "react-router-dom";




function App() {
 
  return (
    <>
 <Navbar/>
 <Routes>
 <Route path="/" element={<Home />} />
 <Route path="sign_up" element={<Signup />} />
 <Route path="sign_in" element={<Signin />} />


 </Routes>

    <Footer />
      
  
    </>
  );
}

export default App;
