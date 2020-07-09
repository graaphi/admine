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
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    </Head>
    <Component
      {...pageProps}
    />
  </MDXProvider>
);

App.defaultProps = defaultProps;
App.propTypes = propTypes;

export default App;
