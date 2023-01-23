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
        <Button>Send message</Button>
        <Subtitle>
          or send us an email at <Link href='mailto:hello@actegon.com'>hello@actegon.com</Link>
        </Subtitle>
      </Actions>
    </Wrapper>
  );
};

export default Contact;
