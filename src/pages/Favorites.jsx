import React from "react";
import { useMovieContext } from "../context/MovieContext";
import MovieCard from "../components/MovieCard"; // adjust path if needed

const Favorites = () => {
  const { favorites } = useMovieContext();

  if (favorites.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-[70vh] text-center px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          No favorites added yet! ⭐
        </h2>
        <p className="mt-2 text-gray-600 text-lg">
          Start adding movies to your favorites to see them here.
        </p>
      </div>
    );
  }

  return (
    <div className="px-6 py-8">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
        Your Favorite Movies ⭐
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {favorites.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
