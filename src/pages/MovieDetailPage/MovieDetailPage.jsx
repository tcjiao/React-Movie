import React from 'react';
import { useParams } from 'react-router-dom';
import { movies } from "../../data.js";


export default function MovieDetailPage() {
  const { movieName } = useParams();
  const selectedMovie = movies.find(movie => movie.title === decodeURIComponent(movieName));

  if (!selectedMovie) {
    return <div>Movie not found.</div>;
  }

  return (
    <div>
      <h1>{selectedMovie.title}</h1>
      <img src={selectedMovie.posterPath} alt={`Poster for ${selectedMovie.title}`} />
      <p>Release Date: {selectedMovie.releaseDate}</p>
      <p>Cast Members: </p>
      <ul>
        {selectedMovie.cast.map((actor, index) => (
          <li key={index}>{actor}</li>
        ))}
      </ul>
    </div>
  );
  }