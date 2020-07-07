/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { MDXProvider } from '@mdx-js/react';

import Head from 'next/head';

import '../css/styles.css';

const defaultProps = {
  pageProps: {},
};

const propTypes = {
  Component: PropTypes.any.isRequired,
  pageProps: PropTypes.object,
};

const App = ({
  Component,
  pageProps,
}) => (
  <MDXProvider>
    <Head>
      <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Component
      {...pageProps}
    />
  </MDXProvider>
);

App.defaultProps = defaultProps;
App.propTypes = propTypes;

export default App;
