import React from 'react'
import Home from './pages/Home'
import Favorites from './pages/Favorites'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
const App = () => {
  return (
    <main>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </main>
  )
}

export default App
