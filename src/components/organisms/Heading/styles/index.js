import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    background-color: ${theme.colors.blue};
  `}
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${media.lessThan('medium')`
  flex-direction: column;

  `}
`;
export const Section = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    background-color: ${theme.colors.blue};
  `}
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1em;
  height: 100vh;
  ${media.lessThan('medium')`
  flex-direction: column;
  `};
`;
