import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getTrendingMovies } from './Api';
import 'index.css';

const Home = () => {
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const trendingMovies = await getTrendingMovies();
      setMovies(trendingMovies);
    };
    fetchMovies();
  }, []);

  const handleSearchBarClick = () => {
    navigate('/movies/search');
  };

  const getPosterUrl = movie => {
    if (movie.poster_path) {
      return `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    } else {
      return '/placeholder-movie-poster.jpg';
    }
  };

  if (!movies.length) return <p>Loading movies...</p>;

  return (
    <div className="home-container">
      <h1 className="h1-home">Movie App</h1>

      <div className="buttons-container-home">
        <Link to="/">Home</Link>

        <button className="button-home" onClick={handleSearchBarClick}>
          Movie
        </button>
      </div>

      <h2 className="h2-home">Popular Movies</h2>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
              <img
                src={getPosterUrl(movie)}
                alt={movie.title}
                className="movie-poster"
              />
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
