import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding: 1em;
  margin: 1em;
  border-radius: 7px;

  ${media.lessThan('medium')`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  `}
`;
