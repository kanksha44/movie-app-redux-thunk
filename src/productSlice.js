import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getAllMovies = createAsyncThunk(
  "product/fetchAllMovies",
  async () => {
    const res = await fetch(
      " https://www.omdbapi.com/?s=mystery&apikey=67fae5cf&page=1"
    );
    const movieData = await res.json();
    return movieData.Search;
  }
);

const productSlice = createSlice({
  initialState: {
    movies: [],
    loading: false,
    favorites: [],
  },
  name: "products",
  reducers: {
    // setLoading: (state, action) => {
    //   console.log("state", state);
    //   state.loading = action.payload;
    // },
    addToFavorites: (state, action) => {
      const movie = action.payload;
      // state.favorites.push(movie);
      const existingMovie = state.favorites.find(
        (favMovie) => favMovie.imdbID === movie.imdbID
      );
      if (existingMovie) {
        alert("Movie is already in favorites!");
      } else {
        state.favorites.push(movie);
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllMovies.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getAllMovies.fulfilled, (state, action) => {
      state.loading = false;
      state.movies = action.payload;
    });
    builder.addCase(getAllMovies.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },

  // extraReducers: (builder) => {
  //   builder.addCase(getAllProducts.fulfilled, (state, action) => {
  //     state.products = action.payload;
  //     state.loading = false;
  //   });
  //   builder.addCase(getAllProducts.rejected, (state, action) => {
  //     console.log("action rejected", action);
  //     state.products = [];
  //     state.loading = false;
  //   });
  //   builder.addCase(getAllProducts.pending, (state) => {
  //     // console.log("action pending", action);
  //   });
  // }
});

export const { addToFavorites } = productSlice.actions;
export const productReducer = productSlice.reducer;
