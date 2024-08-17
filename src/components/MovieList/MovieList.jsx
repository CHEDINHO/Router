
import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import './MovieList.css';

const MoviesList = ({ movies }) => {
  return (
    <div className="d-flex flex-wrap">
      {movies.map((movie, index) => (
        <MovieCard key={index} {...movie} />
      ))}
    </div>
  );
};

export default MoviesList;
