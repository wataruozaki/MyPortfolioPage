import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.black};
  `}
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100vh;
  background-color: #fff;
`;

export const Span = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.accent};
  `}
`;

export const Section = styled.section`
  padding: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
