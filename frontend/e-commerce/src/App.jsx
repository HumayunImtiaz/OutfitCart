import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Userlayout from './components/Layout/Userlayout'
import Home from './pages/Home'
import {Toaster} from "sonner";
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'
import CollectionPage from './pages/CollectionPage'
import ProductDetails from './components/Products/ProductDetails'
import Checkout from './components/Cart/Checkout'
function App() {
  return (
    <BrowserRouter>
    <Toaster position="top-right"/>
    <Routes>
      <Route path='/'  element={<Userlayout/>}>
      {/* Ye child route hai jisy hm Userlayout.jsx mai Outlet ky zrye access kry gy */}
      <Route index element={<Home/>}/>  
      <Route path='login' element={<Login/>}/>   
      <Route path='register' element={<Register/>}/>    
      <Route path='profile' element={<Profile/>}/>  
      <Route path='collections/:collection' element={<CollectionPage/>}/>   
      <Route path='product/:id' element={<ProductDetails/>}/> 
      <Route path='checkout' element={<Checkout/>}/>
        
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App