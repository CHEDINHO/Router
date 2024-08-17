import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddMovie from './components/AddMovie/AddMovie';
import MoviesList from './components/MovieList/MovieList';
import Filter from './components/Filter/Filter';
import NavbarComponent from './Navbar/Navbar';
import MovieDetails from './components/MovieDetails/MovieDetails';
import moviesData from './moviesData';
import './styles.css';

const App = () => {
  const [movies, setMovies] = useState(moviesData);
  const [filterTitle, setFilterTitle] = useState('');
  const [filterRating, setFilterRating] = useState(0);

  const addMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  const filteredMovies = movies.filter((movie) => 
    movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
    (filterRating === 0 || movie.rating === filterRating)
  );

  return (
    <Router>
      <div>
        <NavbarComponent />
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={
              <>
                <AddMovie addMovie={addMovie} />
                <Filter 
                  filterTitle={filterTitle}
                  filterRating={filterRating}
                  setFilterTitle={setFilterTitle}
                  setFilterRating={setFilterRating}
                />
                <MoviesList movies={filteredMovies} />
              </>
            } />
            <Route path="/movie/:id" element={<MovieDetails />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
