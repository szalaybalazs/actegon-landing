import App from './App';
import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import Undicat from './Undicat';
import Wallit from './Wallit';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-template-areas: 'undicat aac aac' 'undicat crypto wallit';
  width: calc(100vw - 48px);
  max-width: 1200px;
  gap: 12px;
  margin: auto;
  margin-bottom: 256px;
`;

interface iAppsProps {}

const Apps: FunctionComponent<iAppsProps> = () => {
  return (
    <Wrapper>
      <App area='undicat'>
        <Undicat />
      </App>
      <App area='aac' />
      <App area='crypto' />
      <App area='wallit'>
        <Wallit />
      </App>
    </Wrapper>
  );
};

export default Apps;
