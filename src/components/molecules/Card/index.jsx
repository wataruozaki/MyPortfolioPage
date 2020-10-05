import React from 'react';
import { Grid } from './styles';
import { BgImg } from '../../atoms';
const Card = ({ c }) => {
  return (
    <Grid>
      <BgImg src={c.image} />
      <section>
        <h3>使用してる技術</h3>
        <ul>
          <li>aaa</li>
          <li>aaa</li>
          <li>aaa</li>
          <li>aaa</li>
          <li>aaa</li>
        </ul>
      </section>
    </Grid>
  );
};

export default Card;
