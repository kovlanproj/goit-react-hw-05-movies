import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from '../../services/movieApi';
import { MovieCastItem } from '../MovieCastItem/MovieCastItem';

export const Cast = () => {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState(null);

  useEffect(() => {
    getMovieCredits(movieId).then(setMovieCast);
  }, [movieId]);

  if (!movieCast) {
    return null;
  }

  return (
    <div>
      Cast list {movieId}
      <ul>
        <li>
          {movieCast.map(movieCastItem => (
            <MovieCastItem
              key={movieCastItem.id}
              movieCastItem={movieCastItem}
            />
          ))}
        </li>
      </ul>
    </div>
  );
};
