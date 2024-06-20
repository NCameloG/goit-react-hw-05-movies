import React from 'react';
import 'index.css';

const Cast = ({ cast }) => {
  return (
    <div className="cast-list">
      <h2>Cast</h2>
      <ul>
        {cast.map(actor => (
          <li key={actor.id}>
            <img
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
                  : '/placeholder-actor-image.jpg'
              }
              alt={actor.name}
              className="movie-poster"
              onError={e => {
                e.target.src = '/placeholder-actor-image.jpg';
              }}
            />
            <p>{actor.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
