import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function MoviesDetails() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=0635aa13dcf8f77aa3d3a659b24086cc&page=4"
      )
      .then((res) => setMovies(res.data.results))
      .catch((err) => console.log(err));
  }, []);
  console.log(movies);
  return (
    <div className="container pt-5">
      <h1>Movies</h1>
      <div className="row">
        {movies.map((movie) => {
          return (
            <div
              className="card col-3 mt-4 p-4 offset-1"
              style={{ width: "18 rem" }}
              key={movie.id}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h4 className="card-title">{movie.title}</h4>
                <h5 className="card-text">Rate : {movie.vote_average}</h5>
                <Link to={`/watchMovie/${movie.id}`} className="btn btn-dark">
                  Movie Details
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
