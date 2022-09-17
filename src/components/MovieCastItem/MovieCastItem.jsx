import { IMAGE_URL } from 'services/movieApi';

export const MovieCastItem = ({
  movieCastItem: { name, character, profile_path },
}) => {
  return (
    <div>
      {name} - {character}
      <p>
        <img src={`${IMAGE_URL}${profile_path}`} alt="" />
      </p>
    </div>
  );
};
