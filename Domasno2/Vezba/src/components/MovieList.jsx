import React from 'react';
import PropTypes from 'prop-types';
import '../components/MovieList.css'; 

function MovieList({ movies }) {
  return (
    <div className="movie-list">
      <h2>List of Movies</h2>
      <ul>
        {movies.map((movie, index) => (
          <li key={index} className="movie-item">
            <h3>{movie.name}</h3>
            <p>Date: {movie.date}</p>
            <p>Genre: {movie.genre}</p>
            <p>Plot: {movie.plot}</p>
            <p><a href={movie.imdbLink} >IMDb Link</a></p>
            <img src={movie.imgUrl} alt={movie.name} />
          </li>
        ))}
      </ul>
    </div>
  );
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
      plot: PropTypes.string.isRequired,
      imdbLink: PropTypes.string.isRequired,
      imgUrl: PropTypes.string.isRequired
    })
  ).isRequired
};

export default MovieList;

