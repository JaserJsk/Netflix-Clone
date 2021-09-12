import "./Banner.css";

import React, { useState, useEffect } from "react";
import * as constants from "../constants";

import tmdb from "../apis/tmdb";
import requests from "../apis/requests";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await tmdb.get(requests.NetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url(${constants.IMAGE_BASE_URL}${movie?.backdrop_path})`,
      }}
    >
      <div className="banner-contents">
        <h1 className="banner-title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div>
          <button className="banner-btn">Play</button>
          <button className="banner-btn">My List</button>
        </div>
        <h1 className="banner-desc">{truncate(movie?.overview, 150)}</h1>
      </div>

      <div className="banner-fade-bottom"></div>
    </header>
  );
}

export default Banner;
