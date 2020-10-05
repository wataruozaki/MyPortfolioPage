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
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;

  align-items: flex-start;
  width: 20vw;
`;

export const BoxContent = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  padding: 0.5em 0.5em 0; ;
`;
