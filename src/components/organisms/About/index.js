import React from 'react';
import { Container, Span, Section } from './styles';
import { Img, Text } from '../../atoms';

const AboutMe = () => {
  return (
    <Container>
      <Section>
        <h2>
          <Span>About </Span>
          this Site
        </h2>
        <Text>
          足を運んでいただき、ありがとうございます。
          <br />
          こちらは尾崎航のポートフォリオサイトです。
          <br />
          <br />
          生み出したもの、勉強したことをここに上げていきます。
        </Text>
      </Section>
      <Img src={`${process.env.PUBLIC_URL}/image/color.png`} width="200px" />
    </Container>
  );
};

export default AboutMe;
