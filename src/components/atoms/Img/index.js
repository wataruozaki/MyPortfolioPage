import styled, { css } from 'styled-components';

const Img = styled.img`
  ${({ theme }) => css`
    transition: ${theme.transition};
  `}
  width: ${(props) => props.width};
  border-radius: ${(props) => props.radius};
  cursor: ${(props) => props.cursor};
  margin: 0;
  padding: 0;
  &:hover {
    opacity: ${(props) => props.hover};
  }
`;

export default Img;
