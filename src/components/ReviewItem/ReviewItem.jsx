import { Author } from './RewiewItem.styled';

export const ReviewItem = ({ review: { author, content } }) => {
  return (
    <div>
      <Author>{author}</Author>
      <p>{content}</p>
    </div>
  );
};
