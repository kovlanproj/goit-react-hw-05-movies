import { IMAGE_URL } from 'services/movieApi';

export const MovieCastItem = ({
  movieCastItem: { name, character, profile_path },
}) => {
  return (
    <div>
      {name} - {character}
      <p>
        {profile_path ? (
          <img
            src={`${IMAGE_URL}${profile_path}`}
            alt={`${name}`}
            width="100"
          />
        ) : (
          'No image'
        )}
      </p>
    </div>
  );
};
