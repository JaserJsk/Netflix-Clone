import * as constants from "../constants";

import axios from "axios";

/** Base URL to make requests to (The Movie Database) */
const tmdb = axios.create({
  baseURL: constants.BASE_URL,
});

export default tmdb;
