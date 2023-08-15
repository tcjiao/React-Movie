import React from 'react';
import { movies } from "../../data.js";
import './ActorListPage.css';

const getUniqueActors = () => {
  const uniqueActors = new Set();

  movies.forEach(movie => {
    movie.cast.forEach(actor => {
      uniqueActors.add(actor);
    });
  });

  return [...uniqueActors];
};

const ActorCard = ({ actor }) => {
  return (
    <div className="actor-card" style={{ backgroundImage: `url(https://picsum.photos/200/300?name=${encodeURIComponent(actor)}&${Math.random()})` }}>
      <p className="actor-name">{actor}</p>
    </div>
  );
};

export default function ActorListPage() {
  const uniqueActors = getUniqueActors();

  return (
    <div>
      <h1>Actors</h1>
      <div className="actor-list">
        {uniqueActors.map((actor, index) => (
          <ActorCard key={index} actor={actor} />
        ))}
      </div>
    </div>
  );
}