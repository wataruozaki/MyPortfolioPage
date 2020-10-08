import React from 'react';
import { Container, Section, Grid } from './styles';
import { WorksBox } from '../../molecules';

const Works = ({ works }) => {
  return (
    <Container>
      <Section>
        <h2>Works</h2>
        <Grid color="black">
          {works.map((work, i) => (
            <WorksBox key={i} c={work} />
          ))}
        </Grid>
      </Section>
    </Container>
  );
};

export default Works;
