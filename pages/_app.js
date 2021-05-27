import React from 'react';
import { UserProvider } from '@auth0/nextjs-auth0';
import PropTypes from 'prop-types';

import '../styles/global/globals.scss'

export default function App({ Component, pageProps }) {
  return (
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
  );
}

App.propTypes = {
  Component: PropTypes.any, 
  pageProps: PropTypes.any
};