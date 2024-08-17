import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './MovieCard.css';

const MovieCard = ({ id, title, posterURL, rating }) => {
  return (
    <Card className="movie-card">
      <Link to={`/movie/${id}`}>
        <Card.Img variant="top" src={posterURL} alt={title} />
      </Link>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <div className="star-rating">
          {Array.from({ length: 5 }, (_, index) => (
            <span key={index} className={`star ${index < rating ? 'filled' : ''}`}>★</span>
          ))}
        </div>
      </Card.Body>
    </Card>
  );
};

MovieCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  posterURL: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default MovieCard;
