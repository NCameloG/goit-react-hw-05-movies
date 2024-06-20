import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { searchMovies, getPosterUrl } from './Api';
import 'index.css';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  const handleSearchChange = event => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = async () => {
    const results = await searchMovies(searchTerm);
    const resultsWithImages = results.map(movie => {
      const posterUrl = getPosterUrl(movie);
      return { ...movie, posterUrl };
    });
    setSearchResults(resultsWithImages);
    navigate(`/movies/search?q=${searchTerm}`);
  };

  const handleKeyPress = event => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  const handleBackToMainMenu = () => {
    navigate('/');
  };

  return (
    <div className="search-bar-container">
      <button onClick={handleBackToMainMenu} className="home-button">
        Home
      </button>
      <input
        type="text"
        placeholder="Search for movies..."
        value={searchTerm}
        onChange={handleSearchChange}
        onKeyPress={handleKeyPress}
      />
      <button onClick={handleSearch}>Search</button>
      {searchResults.length > 0 && (
        <ul>
          {searchResults.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>
                <img
                  src={movie.posterUrl}
                  alt={movie.title}
                  className="movie-poster"
                />
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
