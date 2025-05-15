import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Userlayout from './components/Layout/Userlayout'
import Home from './pages/Home'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/'  element={<Userlayout/>}>
      {/* Ye child route hai jisy hm Userlayout.jsx mai Outlet ky zrye access kry gy */}
      <Route index element={<Home/>}/>     
        
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App