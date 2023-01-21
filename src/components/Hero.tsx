import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: var(--max-width);
  width: calc(100vw - 48px);
  margin: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 80vh;
  justify-content: center;
`;
const Title = styled.h1`
  font-size: 4rem;
  font-weight: 900;
  color: var(--colour-accent);
  margin: 0;
  margin-bottom: 24px;
  background: -webkit-linear-gradient(175deg, #ff1e00, rgb(210, 57, 27));
  background: -o-linear-gradient(175deg, #ff1e00, rgb(210, 57, 27));
  background: -moz-linear-gradient(175deg, #ff1e00, rgb(210, 57, 27));
  background: linear-gradient(175deg, #ff1e00, rgb(210, 57, 27));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
const Subtitle = styled.h2`
  font-size: 1.4rem;
  font-weight: 500;
  text-align: center;
  margin: 0;
  max-width: 720px;
`;
interface iHeroProps {}

const Hero: FunctionComponent<iHeroProps> = () => {
  return (
    <Wrapper>
      <Title>Actegon Solutions</Title>
      <Subtitle>Independent mobile and web app developers, always working on something new.</Subtitle>
    </Wrapper>
  );
};

export default Hero;
