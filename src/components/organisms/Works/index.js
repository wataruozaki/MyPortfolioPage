import React from 'react';
import { Container, Section, Grid } from './styles';
import { Box } from '../../molecules';
const Works = () => {
  const contents = [
    {
      name: 'hipo',
      date: '2020.08.31',
      image: `${process.env.PUBLIC_URL}/image/test.jpg`,
    },
    {
      name: 'hipo02',
      date: '2020.09.01',
      image: `${process.env.PUBLIC_URL}/image/test.jpg`,
    },
    {
      name: 'hipo03',
      date: '2020.09.11',
      image: `${process.env.PUBLIC_URL}/image/test.jpg`,
    },
    {
      name: 'hipo04',
      date: '2020.09.21',
      image: `${process.env.PUBLIC_URL}/image/test.jpg`,
    },
  ];

  return (
    <Container>
      <Section>
        <h2>Works</h2>
        <Grid color="black">
          {contents.map((c, i) => (
            <Box key={i} c={c} />
          ))}
        </Grid>
      </Section>
    </Container>
  );
};

export default Works;
