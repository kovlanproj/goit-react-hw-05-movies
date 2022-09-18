import { useSearchParams } from 'react-router-dom';
import { SearchBox } from 'components/SeearchBox';
import { useEffect, useState } from 'react';
import { getMovieByName } from 'services/movieApi';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const [query, setQuery] = useState(() => searchParams.get('query') ?? '');
  // setQuery(searchParams.get('filter') ?? '');

  const onSearch = value => {
    setSearchParams(value !== '' ? { query: value } : {});
    setQuery(value);
  };

  useEffect(() => {
    if (query !== '') {
      getMovieByName(query).then(setMovies);
    }
  }, [query]);

  return (
    <div>
      Movies
      <SearchBox value={query} onSearch={onSearch} />
      {movies.map(movie => (
        <p>{movie.title}</p>
      ))}
    </div>
  );
};

export default Movies;
