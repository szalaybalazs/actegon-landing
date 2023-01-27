import React, { FunctionComponent } from 'react';
import styled, { keyframes } from 'styled-components';

const IMAGES = 8;
const TOTAL_WIDTH = ((166 + 12) * IMAGES) / 2;

const animation = keyframes`
  from {
    transform: translateX(${-TOTAL_WIDTH * 0.5}px);
  }
  to {
    transform: translateX(${-TOTAL_WIDTH * 1.5}px);
  }
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  position: relative;
  border: 1px solid var(--border-colour);
  overflow: hidden;
`;

const Strap = styled.div`
  position: absolute;
  top: 0;
  width: 600px;
  transform-origin: center;
  transform: translate(calc(var(--x) * 2px), calc(var(--y) * -2px)) rotate(20deg) translateY(24px);
  /* transform: rotate(40deg); */
`;
const Images = styled.div<{ offset?: number }>`
  display: flex;
  padding-left: ${(p) => p.offset ?? 0}px;
  animation: ${animation} 30s linear infinite;
`;
const Image = styled.img`
  width: 166px;
  height: 108px;
  object-fit: cover;
  border-radius: 12px;
  margin: 6px;
`;

const Title = styled.strong`
  margin: 0;
  margin: 0;
  font-size: 32px;
  line-height: 32px;
  font-weight: 700;
  transform: translate(calc(var(--x) * -4px), calc(var(--y) * 4px));
  margin-bottom: 4px;
`;
const Subtitle = styled.p`
  margin: 0;
  font-size: 16px;
  font-weight: 500;
  opacity: 0.6;
  transform: translate(calc(var(--x) * -3px), calc(var(--y) * 3px));
`;

interface iWallitProps {}

const Wallit: FunctionComponent<iWallitProps> = () => {
  return (
    <Wrapper>
      <Strap>
        {[0, 1].map((offset) => (
          <Images offset={offset * 96} key={`images-${offset}`}>
            {new Array(Math.floor(IMAGES / 2)).fill(null).map((_, index) => (
              <Image src={`/wallit/image-${index * 2 + offset}.png`} key={`image-${offset}-${index}`} />
            ))}
            {new Array(Math.floor(IMAGES / 2)).fill(null).map((_, index) => (
              <Image src={`/wallit/image-${index * 2 + offset}.png`} key={`image-${offset}-${index}`} />
            ))}
            {new Array(Math.floor(IMAGES / 2)).fill(null).map((_, index) => (
              <Image src={`/wallit/image-${index * 2 + offset}.png`} key={`image-${offset}-${index}`} />
            ))}
          </Images>
        ))}
      </Strap>
      <Title>Wallit</Title>
      <Subtitle>One wallet to rule them all</Subtitle>
    </Wrapper>
  );
};

export default Wallit;
