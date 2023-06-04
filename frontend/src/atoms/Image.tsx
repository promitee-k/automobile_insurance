
import styled from 'styled-components';

interface ImageProps {
  src: string;
  alt: string;
}

const StyledImage = styled.img<ImageProps>`
  height: 400px;
  object-fit: cover;
  display:flex
`;

const Image = ({ src, alt}: ImageProps) => {
  return <StyledImage src={src} alt={alt} />;
};

export default Image;
