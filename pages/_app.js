import React from 'react';
import { Container } from 'next/app';
import Head from 'next/head';
import { UserProvider } from '@auth0/nextjs-auth0';
  
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <Container>
      <Head>
        <title>Grit</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" rel="stylesheet"/>
      </Head>
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </Container>
  );
}