import React, { FunctionComponent } from 'react';
import styled, { keyframes } from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  position: relative;
`;
const Title = styled.strong`
  font-size: 32px;
  color: white;
  font-weight: 600;
  margin: 0;
`;
const Subtitle = styled.span`
  color: white;
  opacity: 0.8;
  font-weight: 500;
  margin: 0;
`;

const Svg = styled.svg`
  width: 100%;
  height: 100%;
  position: absolute;
  inset: 0;
  z-index: -1;
`;
const Logo = styled.svg`
  position: absolute;
  left: 50%;

  transform: translateX(-50%);
  width: 40%;
  height: 40%;
  opacity: 0.8;
  top: 64px;
`;
interface iUndicatProps {}

const Undicat: FunctionComponent<iUndicatProps> = () => {
  return (
    <Wrapper>
      <Svg preserveAspectRatio='xMidYMid slice' viewBox='0 0 100 100'>
        <defs>
          <linearGradient id='a' gradientUnits='objectBoundingBox' x1='0' y1='0' x2='1' y2='1'>
            <stop offset='0' stop-color='#007915'>
              <animate
                attributeName='stop-color'
                values='#007915;#26B63E;#035D13;38C850;#24B63D;043E0E;#007915;'
                dur='20s'
                repeatCount='indefinite'
              ></animate>
            </stop>
            <stop offset='.5' stop-color='#26B63E'>
              <animate
                attributeName='stop-color'
                values='#26B63E;#035D13;38C850;#24B63D;043E0E;#007915;#26B63E;'
                dur='20s'
                repeatCount='indefinite'
              ></animate>
            </stop>
            <stop offset='1' stop-color='#035D13'>
              <animate
                attributeName='stop-color'
                values='#035D13;38C850;#24B63D;043E0E;#007915;#26B63E;#035D13;'
                dur='20s'
                repeatCount='indefinite'
              ></animate>
            </stop>
            <animateTransform
              attributeName='gradientTransform'
              type='rotate'
              from='0 .5 .5'
              to='360 .5 .5'
              dur='20s'
              repeatCount='indefinite'
            />
          </linearGradient>
          <linearGradient id='b' gradientUnits='objectBoundingBox' x1='0' y1='1' x2='1' y2='1'>
            <stop offset='0' stop-color='#007915'>
              <animate
                attributeName='stop-color'
                values='#007915;#26B63E;#035D13;38C850;#24B63D;043E0E;#007915;'
                dur='20s'
                repeatCount='indefinite'
              ></animate>
            </stop>
            <stop offset='1' stop-color='#26B63E' stop-opacity='0'>
              <animate
                attributeName='stop-color'
                values='#26B63E;#035D13;38C850;#24B63D;043E0E;#007915;#26B63E;'
                dur='20s'
                repeatCount='indefinite'
              ></animate>
            </stop>
            <animateTransform
              attributeName='gradientTransform'
              type='rotate'
              values='360 .5 .5;0 .5 .5'
              dur='10s'
              repeatCount='indefinite'
            />
          </linearGradient>
        </defs>
        <rect fill='url(#a)' width='100%' height='100%' />
        <rect fill='url(#b)' width='100%' height='100%' />
        <rect
          id='Rectangle'
          x='0'
          y='40'
          style={{
            transformOrigin: 'center center',
            rotate: '20deg',
          }}
          width='40'
          height='40'
          rx={1}
          fill='white'
          opacity={0.1}
        ></rect>
        <polygon
          scale={1}
          fill='white'
          opacity={0.05}
          transform='translate(20, 2) rotate(45) translate(10, 30) scale(.1) translate(-113, -658)'
          style={{ transformOrigin: 'center' }}
          // transform='translate(292.537274, 501.559018) rotate(21.000000) translate(-292.537274, -501.559018) '
          points='113.471912 658.732179 471.602636 658.732179 292.537274 344.385857'
        ></polygon>
        <rect id='Rectangle' x='55' y='-12' width='30' height='30' fill='white' opacity={0.1} rx='177.5'>
          {/* <animate
            attributeName='x'
            values='-200;120;-200'
            dur='10s'
            calcMode='spline'
            repeatCount='indefinite'
            keyTimes='0; 0.25; 0.5; 0.75; 1'
            keySplines='0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1'
          />
          <animate
            attributeName='y'
            values='-200;120;-200'
            dur='10s'
            repeatCount='indefinite'
            calcMode='spline'
            keyTimes='0; 0.25; 0.5; 0.75; 1'
            keySplines='0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1'
          /> */}
        </rect>
      </Svg>

      <Logo width='42px' height='50px' viewBox='0 0 42 50' version='1.1' xmlns='http://www.w3.org/2000/svg'>
        <g id='branding' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>
          <g id='szalay.me' transform='translate(-918.000000, -462.000000)' fill='#FFFFFF'>
            <g id='Group' transform='translate(918.000000, 462.000000)'>
              <path
                d='M40.9676065,42.0774933 C40.9541098,40.0421949 38.8324327,38.9921536 37.4449746,39.1379177 C35.7093023,39.3214725 34.2462629,40.1663643 32.7670274,40.986962 C30.9989632,41.9695199 29.2524936,43.0087638 27.4250439,43.8644529 C26.0375858,44.5149926 24.5340564,44.7066454 23.0953109,43.8536556 C22.4366732,43.462252 21.8185256,42.9871691 21.1274959,42.6659483 C19.7157438,42.0100099 18.3660764,41.2703922 17.2566498,40.1636649 C16.5521234,39.4591385 15.8583944,38.6763315 16.1580206,37.5858002 C16.3091833,37.0351359 16.7086849,36.5465563 17.0353044,36.0552774 C17.8073141,34.8945634 18.3768737,33.6528694 18.8087673,32.3193981 C19.2811509,30.859058 19.2919482,29.3960185 19.1812755,27.9059857 C19.1569815,27.5820655 19.0867988,27.263544 18.9950214,26.9504212 C18.5766245,25.5224731 19.2001709,24.2537858 19.6833518,22.9958958 C20.112546,21.8783712 20.6875043,20.8094346 21.2786586,19.764792 C22.0290737,18.4367193 22.8847628,17.1707313 24.2101362,16.3231402 C24.4773703,16.1530821 24.4557757,15.9614293 24.3316063,15.7265872 C23.3328524,13.8046608 22.3179025,11.8908325 21.3488413,9.95810879 C21.0546138,9.36965381 20.8818564,8.72181347 20.7603864,8.03618243 C22.6823127,9.088923 24.0076861,10.7652099 25.6488816,12.2957327 C25.136008,9.5397119 24.0967641,7.03742857 23.6675699,4.24631641 C24.2506262,4.41907384 24.7041145,4.51085122 25.1252107,4.68360864 C27.8542381,5.79573457 30.4051095,7.24797668 32.9181902,8.76770216 C34.4433143,9.68817532 35.9549418,10.6329425 37.4773666,11.556115 C37.642026,11.6559904 37.8444761,11.7126764 38.0388282,11.7423691 C38.0685209,11.7477677 38.1009129,11.7504671 38.1306056,11.7558658 C41.4453887,12.2525434 43.3754131,8.11716248 40.8299404,5.93879931 C36.5325994,2.25960602 30.9584731,0.0299554914 24.8633752,0 C11.3532047,-0.061821891 0.191455368,10.8839806 0.00250193391,24.3941512 C-0.19185017,38.2255426 10.9618011,49.4979646 24.7500032,49.4979646 C30.4213055,49.4979646 35.6472176,47.5895349 39.8203892,44.3800258 C40.5330136,43.8320609 40.9757045,42.9925678 40.9703058,42.0936893 C40.9676065,42.0882906 40.9676065,42.082892 40.9676065,42.0774933 Z'
                id='Path'
                fill-rule='nonzero'
              ></path>
              <path
                d='M25.184596,28.8048642 L35.7659884,23.1362612 C37.4638699,22.280572 38.84323,22.3696501 39.7529058,22.9284124 C40.1470087,23.1686532 40.4493342,23.4952727 40.6544836,23.8731796 C40.8596331,24.2510864 40.9649071,24.6775813 40.9622584,25.1175729 C40.9568091,26.1460194 40.3683542,27.2581454 39.0699741,27.9923644 C38.8054393,28.1408278 38.4680225,28.0463511 38.3195591,27.7818163 C38.1710957,27.5172815 38.2655724,27.1798647 38.5301072,27.0314012 C39.439783,26.5158283 39.8527812,25.7789099 39.8554806,25.1121742 C39.8581799,24.8557374 39.7960952,24.610098 39.6827231,24.3968505 C39.5666517,24.1836031 39.3965936,24.0000483 39.1752482,23.8650816 C38.5651985,23.489874 37.5718433,23.46558 36.262666,24.1242177 L25.6110909,29.8279121 C26.1320626,31.3962256 26.0078932,32.8133763 25.2763734,33.1157018 C24.466573,33.4504193 23.2221797,32.2978034 22.4960586,30.5405365 C21.7699376,28.7832695 21.8374209,27.0880873 22.6472214,26.7533698 C23.3706431,26.4564429 24.4449783,27.3526221 25.184596,28.8048642 Z'
                id='Path'
              ></path>
            </g>
          </g>
        </g>
      </Logo>
      <Title>Undicat Analytics</Title>
      <Subtitle>A trully transparent analytics tool</Subtitle>
    </Wrapper>
  );
};

export default Undicat;
