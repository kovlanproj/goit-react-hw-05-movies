import axios from 'axios';

const API_KEY = '1e47046f2fa6627c23534650c78833b4';
const BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_URL = 'https://image.tmdb.org/t/p/w200';
const lang = 'en-US';

export const getTrendingMovies = async period => {
  const response = await axios.get(
    `${BASE_URL}/trending/movie/${period}?api_key=${API_KEY}`
  );
  return response.data.results;
};

export const getMovieInfo = async id => {
  const response = await axios.get(
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=${lang}`
  );
  return response.data;
};

export const getMovieCredits = async id => {
  const response = await axios.get(
    `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}&language=${lang}`
  );

  return response.data.cast;
};

export const getMovieReviews = async id => {
  const response = await axios.get(
    `${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}&language=${lang}`
  );
  return response.data;
};
