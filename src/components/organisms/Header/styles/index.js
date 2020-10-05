import styled, { css } from 'styled-components';

export const StyledHeader = styled.header`
  width: 100%;
  padding: 0.3em;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;

  top: 0;
  ${({ theme }) => css`
    background-color: ${theme.colors.black};
    color: ${theme.colors.white};
  `}
`;
