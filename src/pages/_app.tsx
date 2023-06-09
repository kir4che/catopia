import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from 'next/app';
import '../styles/globals.css';

import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className='container flex flex-col h-screen mx-auto'>
      <Header />
      <ChakraProvider><Component {...pageProps} /></ChakraProvider>
      <Footer />
    </main>
  )
}
