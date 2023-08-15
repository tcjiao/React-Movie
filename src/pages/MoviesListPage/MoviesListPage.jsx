import React from 'react';
import { Link } from 'react-router-dom';
import { movies } from "../../data.js";


export default function MoviesListPage() {
    return (
      <div>
        <h1>MoviesListPage</h1>
        <ul className="movie-list">
        {movies.map((movie, index) => (
          <li key={index}>
            <Link to={`/movie/${encodeURIComponent(movie.title)}`}>
              <div className="movie-card">
                <img src={movie.posterPath} alt={`Poster for ${movie.title}`} />
                <p>{movie.title}</p>
                <p>Released: {movie.releaseDate}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      </div>
    );
  }