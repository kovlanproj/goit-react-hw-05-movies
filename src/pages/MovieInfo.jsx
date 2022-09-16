import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

import { getMovieInfo } from 'services/movieApi';

const MovieInfo = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getMovieInfo(movieId).then(setMovie);
  }, [movieId]);

  if (!movie) {
    return null;
  }
  console.log(movie);
  return (
    <>
      <div>{movie.title}</div>
      <NavLink to={`cast`}>Cast</NavLink>
      <NavLink to={`reviews`}>Reviews</NavLink>
      <Outlet />
    </>
  );
};

export default MovieInfo;
