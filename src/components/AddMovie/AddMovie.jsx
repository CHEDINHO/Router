
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

const AddMovie = ({ addMovie }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [posterURL, setPosterURL] = useState('');
  const [rating, setRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    addMovie({ title, description, posterURL, rating });
    setTitle('');
    setDescription('');
    setPosterURL('');
    setRating(0);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Enter movie title" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
        />
      </Form.Group>
      <Form.Group controlId="formDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Enter movie description" 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
        />
      </Form.Group>
      <Form.Group controlId="formPosterURL">
        <Form.Label>Poster URL</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Enter poster URL" 
          value={posterURL} 
          onChange={(e) => setPosterURL(e.target.value)} 
        />
      </Form.Group>
      <Form.Group controlId="formRating">
        <Form.Label>Rating</Form.Label>
        <Form.Control 
          type="number" 
          min="0" 
          max="5" 
          value={rating} 
          onChange={(e) => setRating(Number(e.target.value))} 
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Add Movie
      </Button>
    </Form>
  );
};

AddMovie.propTypes = {
  addMovie: PropTypes.func.isRequired,
};

export default AddMovie;
