import React from 'react';
import { Grid } from './styles';
import { Img } from '../../atoms';
const WorksCard = ({ c }) => {
  return (
    <Grid>
      <Img src={c.image} width="100%" />
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

export default WorksCard;
