import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.black};
  `}
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 2em;
  margin-bottom: 50px;
  background-color: #eee;
`;
