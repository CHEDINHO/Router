// src/components/Filter/Filter.jsx
import React from 'react';
import { Form } from 'react-bootstrap';
import PropTypes from 'prop-types';

const Filter = ({ filterTitle, filterRating, setFilterTitle, setFilterRating }) => {
  return (
    <div className="filter-container">
      <Form>
        <Form.Group controlId="formTitleFilter">
          <Form.Label>Filter by Title</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Enter movie title" 
            value={filterTitle} 
            onChange={(e) => setFilterTitle(e.target.value)} 
          />
        </Form.Group>
        <Form.Group controlId="formRatingFilter">
          <Form.Label>Filter by Rating</Form.Label>
          <Form.Control 
            as="select" 
            value={filterRating} 
            onChange={(e) => setFilterRating(Number(e.target.value))} 
          >
            <option value="0">All Ratings</option>
            <option value="1">1 Star</option>
            <option value="2">2 Stars</option>
            <option value="3">3 Stars</option>
            <option value="4">4 Stars</option>
            <option value="5">5 Stars</option>
          </Form.Control>
        </Form.Group>
      </Form>
    </div>
  );
};

Filter.propTypes = {
  filterTitle: PropTypes.string.isRequired,
  filterRating: PropTypes.number.isRequired,
  setFilterTitle: PropTypes.func.isRequired,
  setFilterRating: PropTypes.func.isRequired,
};

export default Filter;
