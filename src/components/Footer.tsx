import { ADDRESS } from '@/core/constants';
import Link from 'next/link';
import { FunctionComponent, useMemo } from 'react';
import styled, { StyledComponent } from 'styled-components';

const Wrapper = styled.footer`
  background-color: var(--background-secondary);
  border-top: 1px solid var(--border-colour);
`;

const Container = styled.div`
  width: calc(100vw - 48px);
  max-width: var(--max-width);
  margin: auto;
  display: flex;
  margin-top: 32px;
  gap: 16px;
`;
const BottomContainer = styled.div`
  background-color: var(--border-colour);
  padding-block: 16px;
  margin-top: 32px;
`;
const Legal = styled.span`
  font-size: 14px;
  text-align: center;
  text-transform: uppercase;
  font-weight: 500;
  margin: auto;
  display: block;
  opacity: 0.8;
`;

const Column = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
const Title = styled.span`
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
`;

const LineWrapper = styled.div``;
const LineWrapperAnchor = styled.a`
  text-decoration: none;
  &:hover {
    text-decoration: none;
    span {
      text-decoration: underline;
    }
  }
`;
const LineLabel = styled.label`
  font-size: 10px;
  font-weight: 600;
  text-transform: uppercase;
  display: block;
  color: var(--colour-font);
  text-decoration: none;
  margin-bottom: 0px;
  opacity: 0.6;
`;
const LineContent = styled.span`
  display: block;
  font-size: 14px;
  font-weight: 500;
`;
const LineContentLine = styled.span`
  display: block;
`;

interface iLineProps {
  label?: string;
  content: string | string[];
  href?: string;
}
const Line: FunctionComponent<iLineProps> = ({ label, content, href }) => {
  const Wrapper = useMemo(() => {
    if (href?.includes(':')) return LineWrapperAnchor;
    return LineWrapper as StyledComponent<'a', any, {}, never>;
  }, [href]);

  const _content = useMemo(() => {
    return (
      <Wrapper href={href} target={'_blank'} rel='noreferrer'>
        {label && <LineLabel>{label}</LineLabel>}
        <LineContent>
          {typeof content === 'string' ? content : content.map((c) => <LineContentLine key={c}>{c}</LineContentLine>)}
        </LineContent>
      </Wrapper>
    );
  }, [Wrapper]);

  if (!href || href?.includes(':')) return _content;
  return <Link href={href}>{_content}</Link>;
};

interface iFooterProps {}

const Footer: FunctionComponent<iFooterProps> = () => {
  return (
    <Wrapper>
      <Container>
        <Column>
          <Line label='Email' content='hello@actegon.com' href='mailto:hello@actegon.com' />
          <Line label='Address' content={ADDRESS} />
          <Line label='VIES' content='HU27181326' />
          <Line label='Registration Number' content='01-09-387422' />
          <Line label='D-U-N-S©' content='85-182-0890' />
        </Column>
        <Column>
          <Title>Company</Title>
          <Line content='Home' href='/' />
          <Line content='Contact Us' href='/contact' />
        </Column>
        <Column>
          <Title>Legal</Title>
          <Line content='Privacy Policy' href='/privacy' />
          <Line content='Terms of Service' href='/terms' />
        </Column>
      </Container>
      <BottomContainer>
        <Legal>Actegon Solutions Kft. | All rights reserved | {new Date().getFullYear()}</Legal>
      </BottomContainer>
    </Wrapper>
  );
};

export default Footer;
