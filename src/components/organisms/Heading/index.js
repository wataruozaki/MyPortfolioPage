import React from 'react';
import { UnitItem } from '../../molecules';
import { Container, Section } from './styles';

const Heading = () => {
  const units = [
    {
      image: `${process.env.PUBLIC_URL}/image/desktop.svg`,
      body: 'シンプルで変更に強く、理解しやすいコードを心がけています。',
    },
    {
      image: `${process.env.PUBLIC_URL}/image/people.svg`,
      body:
        '今まで音楽制作等で培った、チームでのものづくりを考えて作業できます。',
    },
    {
      image: `${process.env.PUBLIC_URL}/image/pen.svg`,
      body:
        'プログラムスキルに対しての興味はつきません。空いた時間があれば勉強し、行動に移します。',
    },
  ];
  return (
    <>
      <Section>
        <h2>Policy</h2>
        <Container bg="blue" color="white">
          {units.map((unit, i) => (
            <UnitItem unit={unit} key={i} />
          ))}
        </Container>
      </Section>
    </>
  );
};

export default Heading;
