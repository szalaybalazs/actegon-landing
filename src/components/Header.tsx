import React, { FunctionComponent, useEffect, useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.header<{ scrolled: boolean }>`
  position: sticky;
  top: 0;
  z-index: 2;
  background-color: var(--background-primary-translucent);
  backdrop-filter: blur(8px);
  transition: 320ms;
  border-bottom: 1px solid ${(p) => (p.scrolled ? 'var(--border-colour)' : 'transparent')};
`;

const Container = styled.nav`
  width: var(--max-width);
  margin-inline: auto;
  height: 80px;
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  height: 36px;
`;

const Contact = styled.a`
  margin-left: auto;
  /* border: 1px solid var(--colour-accent); */
  height: 80px;
  display: flex;
  align-items: center;
  padding-inline: 16px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  /* text-transform: uppercase; */
  color: var(--colour-font);
  cursor: pointer;
  position: relative;
  transition: 120ms;
  z-index: 3;
  &::before {
    position: absolute;
    top: 0;
    bottom: -1px;
    left: 50%;
    right: 50%;
    background-color: var(--colour-accent);
    display: block;
    content: '';
    z-index: -1;
    transform: skew(-12deg);
    transition: 120ms;
    /* z-index: ; */
  }

  svg {
    margin-left: 16px;
    &,
    * {
      transition: transform 120ms;
    }
    transform: translateY(-3.2px);
    #line-1 {
      transform: translateY(24px);
    }
    #line-2 {
      transform: translateY(12px);
    }
  }
  &:hover {
    text-decoration: none;
    color: white;
    &::before {
      left: -10px;
      right: -10px;
    }
    svg {
      transform: translateY(-0);
      #line-1 {
        transform: translateY(0);
      }
      #line-2 {
        transform: translateY(0);
      }
    }
  }
`;
interface iHeaderProps {}

const Header: FunctionComponent<iHeaderProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const _handleScroll = () => setIsScrolled(window.scrollY > 20);

  useEffect(() => {
    _handleScroll();
    window.addEventListener('scroll', _handleScroll);
    return () => window.removeEventListener('scroll', _handleScroll);
  }, []);

  return (
    <Wrapper scrolled={isScrolled}>
      <Container>
        <Logo src='logo.png' />
        <Contact href='#contact'>
          Get in Touch
          <svg width='20px' height='20px' viewBox='0 0 80 85' version='1.1' xmlns='http://www.w3.org/2000/svg'>
            <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>
              <path
                d='M67.0619,23.166 C75.0209,23.166 79.0248,27.1211 79.0248,34.9824 L79.0248,73.06836 C79.0248,80.92969 75.0209,84.88477 67.0619,84.88477 L12.6673,84.88477 C4.6107,84.88477 0.65562,80.92969 0.65562,73.06836 L0.65562,34.9824 C0.65562,27.0723 4.6107,23.166 12.6673,23.166 Z M59.0052,36.0078 C53.8295,36.0078 49.6302,40.1582 49.6302,45.334 C49.6302,50.5098 53.8295,54.6602 59.0052,54.6602 C64.1322,54.6602 68.3314,50.5098 68.3314,45.334 C68.3314,40.1582 64.1322,36.0078 59.0052,36.0078 Z M34.0541,47.9219 L16.2806,47.9219 C14.4252,47.9219 13.1556,49.2891 13.1556,51.0469 C13.1556,52.7559 14.4252,54.0742 16.2806,54.0742 L34.0541,54.0742 C35.7142,54.0742 37.0814,52.7559 37.0814,51.0469 C37.0814,49.2891 35.7142,47.9219 34.0541,47.9219 Z M40.7435,37.1797 L16.2806,37.1797 C14.4252,37.1797 13.1556,38.5957 13.1556,40.3047 C13.1556,41.9648 14.4252,43.4297 16.2806,43.4297 L40.7435,43.4297 C42.4037,43.4297 43.7709,41.9648 43.7709,40.3047 C43.7709,38.5957 42.4037,37.1797 40.7435,37.1797 Z'
                id='Combined-Shape'
                fill='currentColor'
              />
              <path
                d='M7.7357,17.209 L72.0423,17.209 C71.3588,13.2539 69.5033,11.1055 65.1088,11.1055 L14.6693,11.1055 C10.2748,11.1055 8.4193,13.2539 7.7357,17.209 Z'
                id='line-2'
                fill='currentColor'
              />
              <path
                d='M15.7435,6.1738 L63.9857,6.1738 C63.6927,2.4629 61.642,0.6074 57.5892,0.6074 L22.14,0.6074 C18.1361,0.6074 16.0365,2.4629 15.7435,6.1738 Z'
                id='line-1'
                fill='currentColor'
              />
            </g>
          </svg>
        </Contact>
      </Container>
    </Wrapper>
  );
};

export default Header;
