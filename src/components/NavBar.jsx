import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const NavBar = () => {
  const location = useLocation();

  return (
    <nav className="bg-gray-900 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6 py-3">
        
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-white tracking-wide">
          🎬 MovieApp
        </Link>

        {/* Links */}
        <div className="flex space-x-6">
          <Link
            to="/"
            className={`text-white hover:text-blue-400 transition-colors ${
              location.pathname === '/' ? 'text-blue-400 font-semibold' : ''
            }`}
          >
            Home
          </Link>
          <Link
            to="/favorites"
            className={`text-white hover:text-blue-400 transition-colors ${
              location.pathname === '/favorites' ? 'text-blue-400 font-semibold' : ''
            }`}
          >
            Favorites
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
