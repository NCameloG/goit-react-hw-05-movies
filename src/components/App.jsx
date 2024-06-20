import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import Home from './Home';
import Movies from './Movies';
import MovieDetails from './MovieDetails';
import Cast from './Cast';
import Reviews from './Reviews';
import SearchBar from './SearchBar';
import 'index.css';

const App = () => {
  const navigate = useNavigate();
  const [currentRoute, setCurrentRoute] = useState(null);

  useEffect(() => {
    const storedRoute = localStorage.getItem('currentRoute');
    if (storedRoute) {
      setCurrentRoute(storedRoute);
    }
  }, []);

  useEffect(() => {
    if (currentRoute) {
      localStorage.setItem('currentRoute', currentRoute);
    }
  }, [currentRoute]);

  useEffect(() => {
    if (currentRoute) {
      navigate(currentRoute);
    }
  }, [currentRoute, navigate]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />
        <Route path="/movies/:movieId/cast" element={<Cast />} />
        <Route path="/movies/:movieId/reviews" element={<Reviews />} />
        <Route path="/movies/search" element={<SearchBar />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};

export default App;
