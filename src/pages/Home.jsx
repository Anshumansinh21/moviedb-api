import React, { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import { searchMovies, getPopularMovies } from "../services/api";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Utility: Wrap a promise with timeout
  const withTimeout = (promise, ms = 10000) => {
    return Promise.race([
      promise,
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error("Request timed out")), ms)
      ),
    ]);
  };

  // Load popular movies on first render
  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await withTimeout(getPopularMovies(), 10000);
        setMovies(popularMovies);
      } catch (err) {
        setError("⚠️ Cannot get data. Please try again later.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadPopularMovies();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;

    setLoading(true);
    setError(null);

    try {
      const results = await withTimeout(searchMovies(searchTerm), 10000);
      setMovies(results);
    } catch (err) {
      setError("⚠️ Cannot get data. Please try again later.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="home container mx-auto px-4 py-8">
      {/* Search Bar */}
      <form onSubmit={handleSearch} className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="Search for a movie..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-md px-4 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-r-lg transition-colors"
        >
          Search
        </button>
      </form>

      {/* Loading / Error States */}
      {loading && <p className="text-center text-gray-500">⏳ Loading (10s max)...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      {/* Movies Grid */}
      <div className="movies-grid grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {!loading && movies.length > 0 ? (
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
        ) : (
          !loading &&
          !error && (
            <p className="col-span-full text-center text-gray-500">
              No movies found.
            </p>
          )
        )}
      </div>
    </div>
  );
};

export default Home;
