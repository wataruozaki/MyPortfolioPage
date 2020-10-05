import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Section = styled.section`
  ${({ theme }) => css`
    color: ${theme.colors.black};
  `}
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Grid = styled.div`
  display: grid;
  grid-template-columns: 25vw 25vw 25vw;
  grid-template-rows: 40vh 40vh;
  gap: 1em;
  padding: 1em;

  ${media.lessThan('medium')`
  grid-template-columns:80vw;
  `}
`;
export const Container = styled.div`
  padding: 50px;
  margin-bottom: 100px;
`;
