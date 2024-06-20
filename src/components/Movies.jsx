import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import 'index.css';

const Movies = () => {
  const [searchResults] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const searchParam = new URLSearchParams(location.search);
    const searchTerm = searchParam.get('q');
    if (searchTerm) {
    }
  }, [location]);

  if (!searchResults.length) return <p>No results found.</p>;

  return (
    <div>
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
    </div>
  );
};

export default Movies;
