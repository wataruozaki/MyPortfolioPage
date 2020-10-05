import React from 'react';
import { BoxContainer, BoxContent, Section } from './styles';
import { Img, BgImg } from '../../atoms';
import Card from '../Card/index';
import { Modal } from 'semantic-ui-react';
const Box = ({ c }) => {
  return (
    <>
      <BoxContainer>
        <BgImg src={c.image} />
        <BoxContent>
          <Section>
            <h2>{c.name}</h2>
            <p>{c.date}</p>
          </Section>
          <Modal
            trigger={
              <Img
                src={`${process.env.PUBLIC_URL}/image/search.svg`}
                cursor="pointer"
                hover="0.6"
              />
            }
            header={c.name}
            content={<Card c={c} />}
            actions={[{ key: 'done', content: 'Done', primary: true }]}
          />
        </BoxContent>
      </BoxContainer>
    </>
  );
};

export default Box;
