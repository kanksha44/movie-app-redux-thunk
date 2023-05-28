import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import store from "./store";
import Products from "./Products";
import FavMovies from "./FavMovies";


const App = () => (
  <Provider store={store}>
    <Router>
      <Routes>
        <Route exact path="/" element={<Products />} />
        <Route path="/favmovies" element={<FavMovies />} />
       
      </Routes>
    </Router>
  </Provider>
);

export default App;
