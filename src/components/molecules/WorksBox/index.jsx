import React from 'react';
import { BoxContainer, BoxContent, Section } from './styles';
import { Img, BgImg } from '../../atoms';
import WorksCard from '../WorksCard/index';
import { Modal } from 'semantic-ui-react';
const WorksBox = ({ c }) => {
  return (
    <>
      <BoxContainer>
        <BgImg src={c.image} />
        <BoxContent>
          <Section>
            <h3>{c.name}</h3>
            <small>{c.date}</small>
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
            content={<WorksCard c={c} />}
            actions={[{ key: 'done', content: 'Done', primary: true }]}
          />
        </BoxContent>
      </BoxContainer>
    </>
  );
};

export default WorksBox;
