import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  position: relative;
`;
interface iWallitProps {}

const Wallit: FunctionComponent<iWallitProps> = () => {
  return (
    <Wrapper>
      <span>Wallit</span>
    </Wrapper>
  );
};

export default Wallit;
