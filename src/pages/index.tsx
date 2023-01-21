import Apps from '@/components/Apps';
import DocumentHead from '@/components/Head';
import Hero from '@/components/Hero';
import { Inter } from '@next/font/google';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <DocumentHead />
      <Hero />
      <Apps />
    </>
  );
}
