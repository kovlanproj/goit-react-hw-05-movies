import { useNavigate } from 'react-router-dom';

export const GoBackBtn = ({ path }) => {
  const navigate = useNavigate();

  return (
    <button type="button" onClick={() => navigate(path)}>
      Go Back
    </button>
  );
};
