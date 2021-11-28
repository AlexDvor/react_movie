import { LinkWrapper, StyledLink } from './AdditionalButton.styled';

export default function AdditionalButton({ movieId }) {
  return (
    <LinkWrapper>
      <StyledLink to={{ pathname: `/movies/${movieId}/actors` }}>More</StyledLink>
    </LinkWrapper>
  );
}
