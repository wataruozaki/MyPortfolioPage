import React from 'react';
import { StyledHeader } from './styles';
import { Img } from '../../atoms';
const Header = () => {
  return (
    <StyledHeader>
      <Img src={`${process.env.PUBLIC_URL}/image/heart_logo.png`} width="3em" />
    </StyledHeader>
  );
};

export default Header;
