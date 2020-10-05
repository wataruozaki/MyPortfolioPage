import React from 'react';
import { Img, Text } from '../../atoms';
import { Container } from './styles';
const UnitItem = ({ unit }) => {
  return (
    <Container>
      <Img src={unit.image} width="20vw" align="bottom" />
      <Text>{unit.body}</Text>
    </Container>
  );
};

export default UnitItem;
