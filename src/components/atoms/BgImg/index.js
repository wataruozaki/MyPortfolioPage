import styled from 'styled-components';

const BgImg = styled.div`
  background-image: url(${(props) => props.src});
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 40vw;
`;

export default BgImg;
