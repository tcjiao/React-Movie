import './App.css';
import { useState } from 'react';
import LoginPage from '../LoginPage/LoginPage';
import MovieDetailPage from '../MovieDetailPage/MovieDetailPage';
import MoviesListPage from '../MoviesListPage/MoviesListPage';
import ActorListPage from '../ActorListPage/ActorListPage';
import NavBar from '../../components/NavBar/NavBar';
import { Routes, Route } from 'react-router-dom';
import { movies } from "../../data.js";



export default function App() {
  const [user, setUser] = useState({});
  
  return (
    <main className="App">
      { user ?
        <>
          <NavBar />
          <Routes>
            <Route path="/movies" element={<MoviesListPage />} />
            <Route path="/movie/:movieName" element={<MovieDetailPage />} />
            <Route path="/actors" element={<ActorListPage />} />
          </Routes>
        </>
      :
      <LoginPage />
    }
    </main>
  );
}