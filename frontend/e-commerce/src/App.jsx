import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Userlayout from './assets/components/Layout/Userlayout'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/'  element={<Userlayout/>}>
        
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App