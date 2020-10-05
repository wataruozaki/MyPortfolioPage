import React from 'react';
import { Container } from './styles';
import { Graph } from '../../molecules';
import { Text } from '../../atoms';
const SkillSet = () => {
  return (
    <Container>
      <h2>SkillSet</h2>
      <Graph />
      <section>
        <Text>
          フロントエンドの技術に寄っていますが、基本的には「何を作るか」が大事だと思うので、必要になった時に勉強してきました。
          <br />
          特にフロント、バックエンド等のこだわりはなく、今後はインフラ周りのことも含めて制作できたらと思っています。
        </Text>
      </section>
    </Container>
  );
};

export default SkillSet;
