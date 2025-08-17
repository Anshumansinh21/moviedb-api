import React from 'react';
import { useMovieContext } from '../context/MovieContext';

function MovieCard({ movie }) {
  const { isFavorite, addFavorite, removeFavorite } = useMovieContext();

  const favorite = isFavorite(movie.id);

  function handleFavorite() {
    if (favorite) {
      removeFavorite(movie.id);
    } else {
      addFavorite(movie);
    }
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 max-w-xs">
      {/* Poster */}
      <div className="relative">
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
          className="w-full h-64 object-cover"
        />
        <span className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded-lg">
          ⭐ {movie.rating}
        </span>
      </div>

      {/* Info */}
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-900 truncate">{movie.title}</h2>
        <p className="text-gray-600 text-sm mt-1 line-clamp-2">{movie.description}</p>

        <div className="mt-3 text-sm text-gray-500">
          <p><span className="font-medium">Release:</span> {movie.release_date?.split('-')[0]}</p>
        </div>

        {/* Button */}
        <button
          onClick={handleFavorite}
          className={`w-full mt-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
            favorite 
              ? "bg-red-600 hover:bg-red-700 text-white" 
              : "bg-blue-600 hover:bg-blue-700 text-white"
          }`}
        >
          {favorite ? "Remove from Favorites" : "Add to Favorites"}
        </button>
      </div>
    </div>
  );
}

export default MovieCard;
