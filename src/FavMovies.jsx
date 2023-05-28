import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./favmovies.css";

const FavMovies = () => {
  const favouritemovies = useSelector((state) => state.products.favorites);

  return (
    <div>
      <div className="header">
        <span>Favourite movies</span>
        <Link to="/">Back to Products</Link>
      </div>
      <div className="favorite-movies">
        {favouritemovies.length === 0 ? (
          <p>No favorite movies selected.</p>
        ) : (
          favouritemovies.map((movie) => (
            <div key={movie.imdbID}>
              <div>{movie.Title}</div>
              <img src={movie.Poster} alt="poster" />
            </div>
          ))
        )}
      </div>
    </div>
  );
};
export default FavMovies;
