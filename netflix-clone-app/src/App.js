import "./App.css";

import React, { useState, useEffect } from "react";
import requests from "./apis/requests";

import Splash from "./components/Splash";
import Nav from "./components/Nav";
import Banner from "./components/Banner";
import Row from "./components/Row";

function App() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 6000);
  }, [show]);

  if (!show) {
    return (
      <div className="fade-out">
        <Splash />
      </div>
    );
  } else {
    return (
      <div className="app fade-in">
        <Nav />
        <Banner />
        <Row
          title="Netflix Originals"
          fetchUrl={requests.NetflixOriginals}
          isLargeRow={true}
        />
        <Row title="Trending Now" fetchUrl={requests.Trending} />
        <Row title="Top Rated" fetchUrl={requests.TopRated} />
        <Row title="Action Movies" fetchUrl={requests.Action} />
        <Row title="Comedy Movies" fetchUrl={requests.Comedy} />
        <Row title="Romance Movies" fetchUrl={requests.Romance} />
        <Row title="Horror Movies" fetchUrl={requests.Horror} />
        <Row title="Documentaries" fetchUrl={requests.Documentaries} />
      </div>
    );
  }
}

export default App;
