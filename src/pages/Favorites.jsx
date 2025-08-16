import React from 'react'

const Favorites = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[70vh] text-center px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
        No favorites added yet! ⭐
      </h2>
      <p className="mt-2 text-gray-600 text-lg">
        Start adding movies to your favorites to see them here.
      </p>
    </div>
  )
}

export default Favorites
