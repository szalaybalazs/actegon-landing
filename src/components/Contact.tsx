import { useFormik } from 'formik';
import React, { FunctionComponent, useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.form`
  max-width: var(--max-width);
  width: calc(100vw - 48px);
  margin: auto;
  margin-bottom: 256px;
`;
const Title = styled.h4`
  font-size: 32px;
  max-width: 500px;
  margin: 0;
  font-weight: 600;
  margin-bottom: 96px;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr auto;
  grid-template-areas: 'name email' 'message message';
  grid-gap: 24px 16px;
`;
const InputWrapper = styled.div<{ area: string }>`
  grid-area: ${(p) => p.area};
`;
const Label = styled.label`
  display: block;
  font-size: 14px;
  font-weight: 600;
  color: #3c3d3e;
  margin-bottom: 8px;
`;
const Input = styled.input`
  height: 48px;
  border: 1px solid var(--border-colour);
  width: 100%;
  border-radius: 8px;
  padding-inline: 16px;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  color: var(--colour-font);
  outline: none;
  transition: 120ms;
  margin: 0;
  &:focus {
    box-shadow: 0 0 0 4px var(--colour-primary-translucent);
    border-color: var(--colour-primary);
  }
  &::placeholder {
    opacity: 0.6;
  }
`;
const Textarea = styled.textarea`
  width: 100%;
  height: 200px;
  resize: none;
  border-radius: 8px;
  border: 1px solid var(--border-colour);
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  color: var(--colour-font);
  padding: 14px 16px;
  outline: none;
  transition: 120ms;
  margin: 0;
  &:focus {
    box-shadow: 0 0 0 4px var(--colour-primary-translucent);
    border-color: var(--colour-primary);
  }
  &::placeholder {
    opacity: 0.6;
  }
`;

const Actions = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 24px;
  align-items: center;
`;
const Button = styled.button`
  background-color: var(--colour-accent);
  transition: 240ms;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  &:hover {
    background-color: var(--colour-accent-hover);
    transform: scale(1.02);
  }
  &:active {
    transform: scale(0.98);
    background-color: var(--colour-accent-active);
  }
  width: 298px;
  height: 48px;
  border-radius: 8px;
  color: white;
  border: none;
  text-align: left;
  font-size: 14px;
  font-weight: 500;
  padding-inline: 16px;
  margin: 0;
`;
const Subtitle = styled.span`
  font-size: 14px;
  font-weight: 500;
`;
const Link = styled.a``;

const placeholders = ['website', 'mobile app', 'web application', 'B2C app'];

interface iContactProps {}

const Contact: FunctionComponent<iContactProps> = () => {
  const [placeholder, setPlaceholder] = useState(placeholders[0]);
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    onSubmit: (values, helpers) => {},
  });

  return (
    <Wrapper>
      <Title>We would love to hear from you, Get in touch 👋</Title>
      <Content>
        <InputWrapper area='name'>
          <Label>Your name</Label>
          <Input placeholder='John Doe' />
        </InputWrapper>
        <InputWrapper area='email'>
          <Label>Your email</Label>
          <Input placeholder='john@doe.com' />
        </InputWrapper>
        <InputWrapper area='message'>
          <Label>Message</Label>
          <Textarea placeholder={`I would like to create a ${placeholder}`} />
        </InputWrapper>
      </Content>
      <Actions>
        <Button>
          Send message
          <svg width='16px' height='16px' viewBox='0 0 82 82' version='1.1'>
            <g id='Symbols' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
              <g id='paperplane.fill' transform='translate(-1407.000000, -622.000000)' fill='white' fillRule='nonzero'>
                <g id='Symbols' transform='translate(519.616380, 620.414100)'>
                  <g id='Regular-S' transform='translate(887.773000, 1.562500)'>
                    <path
                      d='M48.29102,81.05465 C51.31832,81.05465 53.41792,78.41793 54.98042,74.414025 L79.78512,9.6191 C80.56642,7.666 81.00582,5.9082 81.00582,4.4433 C81.00582,1.7089 79.29682,0 76.61132,0 C75.14652,0 73.38862,0.4882 71.43552,1.2207 L6.20112,26.2695 C2.7832,27.539 -1.77635684e-15,29.6875 -1.77635684e-15,32.7636 C-1.77635684e-15,36.6211 3.02734,37.8906 6.88472,39.0136 L26.36722,44.9707 C29.10152,45.8007 30.51762,45.8007 32.37302,44.0918 L74.70702,4.7851 C75.24412,4.2968 75.87892,4.3945 76.26952,4.7363 C76.70902,5.1269 76.75782,5.8105 76.26952,6.3476 L37.15822,48.8769 C35.54682,50.6347 35.40042,51.9531 36.27932,54.8339 L41.94332,73.779259 C43.11522,77.83199 44.38472,81.05465 48.29102,81.05465 Z'
                      id='Path'
                    ></path>
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </Button>
        <Subtitle>
          or send us an email at <Link href='mailto:hello@actegon.com'>hello@actegon.com</Link>
        </Subtitle>
      </Actions>
    </Wrapper>
  );
};

export default Contact;
