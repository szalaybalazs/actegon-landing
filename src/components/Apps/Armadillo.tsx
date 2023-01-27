import React, { FunctionComponent } from 'react';
import styled, { keyframes } from 'styled-components';

const SCALE = 1.5;
const WIDTH = 50 * SCALE;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  position: relative;
  background-color: #121415;
  /* overflow: hidden; */
`;

const Screenshots = styled.div`
  position: absolute;
  bottom: 48px;
  right: -12px;
  transform-origin: center;
  display: flex;
  transform: translate(calc(var(--x) * 6px), calc(var(--y) * -6px));
  /* transform: rotate(40deg); */
`;
const Images = styled.div<{ offset?: number }>`
  display: flex;
  padding-top: ${(p) => (p.offset ?? 0) * 42}px;
  display: flex;
  flex-direction: column;
`;
const Image = styled.img`
  width: ${WIDTH}px;
  aspect-ratio: 0.462962963;
  max-width: 6vw;
  object-fit: cover;
  border-radius: 4px;
  margin: 6px;
  box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.05), 0 0 32px 0 rgba(0, 0, 0, 0.01);
`;

const Title = styled.strong`
  margin: 0;
  margin: 0;
  font-size: 32px;
  line-height: 32px;
  font-weight: 700;
  transform: translate(calc(var(--x) * -4px), calc(var(--y) * 4px));
  margin-bottom: 4px;
  color: white;
`;
const Subtitle = styled.p`
  margin: 0;
  font-size: 16px;
  font-weight: 500;
  opacity: 0.6;
  transform: translate(calc(var(--x) * -3px), calc(var(--y) * 3px));
  color: white;
`;

interface iWallitProps {}

const Armadillo: FunctionComponent<iWallitProps> = () => {
  return (
    <Wrapper>
      <Screenshots>
        {[0, 1, 2, 3].map((offset) => (
          <Images offset={offset} key={`images-${offset}`}>
            {new Array(2).fill(null).map((_, index) => (
              <Image src={`/armadillo/image-${index * 2 + offset}.png`} key={`image-${offset}-${index}`} />
            ))}
          </Images>
        ))}
      </Screenshots>
      <Title>Armadillo</Title>
      <Subtitle>Crypto wallet case-study</Subtitle>
    </Wrapper>
  );
};

export default Armadillo;
