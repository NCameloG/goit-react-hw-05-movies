const API_KEY = '984aa53d63ec29d9f654111ce8fe1f62';

export const getTrendingMovies = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`
  );
  const data = await response.json();
  return data.results;
};

export const searchMovies = async keyword => {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${keyword}`
  );
  const data = await response.json();
  return data.results;
};

export const getMovieDetails = async movieId => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`
  );
  const data = await response.json();
  return data;
};

export const getMovieCredits = async movieId => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`
  );
  const data = await response.json();
  return data.cast;
};

export const getMovieReviews = async movieId => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}`
  );
  const data = await response.json();
  return data.results;
};

export const getPosterUrl = movie => {
  if (movie.poster_path) {
    return `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  } else {
    return '/placeholder-movie-poster.jpg';
  }
};
