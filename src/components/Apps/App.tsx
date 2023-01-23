import React, { FunctionComponent, useRef, useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div<{ gridArea: string }>`
  grid-area: ${(p) => p.gridArea};
`;
interface iAppProps {
  area: string;
  children?: any;
}

const App: FunctionComponent<iAppProps> = ({ area, children }) => {
  return (
    <Wrapper gridArea={area}>
      <Container>{children}</Container>
    </Wrapper>
  );
};

const ContainerElement = styled.div`
  border: 1px solid var(--border-colour);
  border-radius: 12px;
  /* min-height: 320px; */
  aspect-ratio: 2.41;
  width: 100%;
  height: 100%;
  transition: 120ms;
  background-color: var(--background-secondary);
  overflow: hidden;
`;

const WrapperElement = styled.div`
  width: 100%;
  height: 100%;
  perspective: 800px;
`;

interface iContainerProps {
  children: any;
}
const Container: FunctionComponent<iContainerProps> = ({ children }) => {
  const wrapper = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const _handleMouseMove: React.MouseEventHandler<HTMLDivElement> = (event) => {
    const { pageX, pageY, target } = event;

    const { left, top, width, height } = wrapper.current!.getBoundingClientRect();
    const x = (Math.max(0, Math.min(1, (pageX - left) / width)) - 0.5) * 2;
    const y = -(Math.max(0, Math.min(1, (pageY - window.scrollY - top) / height)) - 0.5) * 2;

    setRotation({ x, y });
  };
  const _handleMouseLeave = () => setRotation({ x: 0, y: 0 });

  return (
    <WrapperElement ref={wrapper} onMouseLeave={_handleMouseLeave}>
      <ContainerElement
        onMouseMove={_handleMouseMove}
        style={{
          transform: `rotate3d(${rotation.y}, ${rotation.x}, 0, -4deg)`,
          // transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        }}
      >
        {children}
      </ContainerElement>
    </WrapperElement>
  );
};

export default App;
