import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function WatchMovie() {
  const params = useParams();
  const [details, setDetails] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${params.id}?api_key=0635aa13dcf8f77aa3d3a659b24086cc`
      )
      .then((res) => setDetails(res.data))
      .catch((err) => console.log(err));
  }, [params.id]);
  return (
    <div className="container row pt-5">
      <div className="col-6">
        <h1 className="mb-4">Details</h1>
        <h2>Name : {details.title}</h2>
        <h3>Rate : {details.vote_average}</h3>
        <h3>
          original language :
          <span className="fs-5"> {details.original_language}</span>
        </h3>

        <h3>
          release date :<span className="fs-5"> {details.release_date}</span>
        </h3>
        <h3>original language :</h3>
        <p className="fs-4">{details.overview}</p>
        
      </div>
      <div className="col-4 offset-2">
        <img
          src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`}
          style={{ width: 350 }}
          className="card-img-top"
          alt="..."
        />
      </div>
    </div>
  );
}
