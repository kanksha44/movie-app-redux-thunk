import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToFavorites, getAllMovies } from "./productSlice";
import { Link } from "react-router-dom";
import "./product.css";

const Products = () => {
  const moviesState = useSelector((state) => state.products.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllMovies());
  }, [dispatch]);

  function handleAddToFavorites(movie) {
    dispatch(addToFavorites(movie));
  }

  return (
    <div>
      <div className="header">
        <span>All Products</span>
        <Link to="/favmovies">Favorite Movies</Link>
      </div>
      <div className="movie-container">
        {moviesState.loading ? (
          <p>Loading movies...</p>
        ) : moviesState.error ? (
          <p>Error fetching movies.</p>
        ) : (
          moviesState.map((movie) => (
            <div className="movie-card" key={movie.imdbID}>
              <img src={movie.Poster} alt={movie.Title} />
              <div>{movie.Title}</div>
              <div>Year: {movie.Year}</div>
              <button onClick={() => handleAddToFavorites(movie)}>
                Add to Fav
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Products;
