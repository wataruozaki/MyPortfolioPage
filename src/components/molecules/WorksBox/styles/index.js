import styled, { css } from 'styled-components';

export const BoxContainer = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    background-color: ${theme.colors.black};
  `}
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1em;
  border-radius: 3px;
  max-width: 100%;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

export const BoxContent = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  padding: 0.5em 0.5em 0;
`;
