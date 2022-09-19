import { GoBackBtn } from 'components/GoBackBtn/GoBackBtn';
import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

import { getMovieInfo } from 'services/movieApi';

const MovieInfo = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';

  useEffect(() => {
    getMovieInfo(movieId).then(setMovie);
  }, [movieId]);

  if (!movie) {
    return null;
  }

  return (
    <>
      <GoBackBtn path={backLinkHref} />
      <div>{movie.title}</div>
      <NavLink to={`cast`}>Cast</NavLink>
      <NavLink to={`reviews`}>Reviews</NavLink>
      <Outlet />
    </>
  );
};

export default MovieInfo;