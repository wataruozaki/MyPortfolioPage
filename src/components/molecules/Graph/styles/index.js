import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  width: 60vw;
  ${media.lessThan('medium')`
  width :100vw;
  `}
`;
