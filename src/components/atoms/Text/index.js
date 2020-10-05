import styled from 'styled-components';

const Text = styled.p`
  color: ${(props) => props.color};
  font-weight: 800;
  font-size: 1.2em;
  line-height: 1.5em;
  padding: 1.5em;
  width: 100%;
`;

export default Text;
