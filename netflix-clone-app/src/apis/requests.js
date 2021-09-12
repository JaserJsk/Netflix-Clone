const API_KEY = "e1eb9c7c46f7c6591cc0aaf092521a21";

const requests = {
  NetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  Trending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  TopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  Action: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  Comedy: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  Romance: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  Horror: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  Documentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default requests;
