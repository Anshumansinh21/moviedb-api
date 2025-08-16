const API_KEY = "77ddb7a535827c2b749a4cee79256bed";
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
  try {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);    
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.log(error);
  }
};    

export const searchMovies = async (query) => {
  try {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.log(error);
  }
};