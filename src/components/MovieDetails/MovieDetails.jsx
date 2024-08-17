import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import moviesData from '../../moviesData'; // Adjust path as needed


const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = moviesData.find(movie => movie.id === parseInt(id));

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div className="movie-detail">
      <h1>{movie.title}</h1>
      <img src={movie.posterURL} alt={movie.title} width="300" />
      <p>{movie.description}</p>
      <p>Rating: {movie.rating} / 5</p>
      <iframe
        width="560"
        height="315"
        src={movie.trailerLink}
        title="Movie Trailer"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <button onClick={() => navigate('/')}>Back to Home</button>
    </div>
  );
};

export default MovieDetails;
