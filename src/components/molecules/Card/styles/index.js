import styled, { css } from 'styled-components';

export const Grid = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.black};
  `}
  display: grid;
  grid-template-columns: 60% 1fr;
  padding: 2em;
  gap: 20px;
`;
