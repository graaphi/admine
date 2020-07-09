import React from 'react';
import PropTypes from 'prop-types';

import dynamic from 'next/dynamic';

import LoadingIndicator from '../components/LoadingIndicator';
import Page from '../components/Page';

import layouts from '../queries/layouts';

const defaultProps = {};

const propTypes = {
  layoutFile: PropTypes.string.isRequired,
};

const Layout = ({
  layoutFile,
}) => {
  const SingleLayout = dynamic(() => import(`../layouts/${layoutFile}`), {
    loading: () => (<LoadingIndicator />),
  });

  return (
    <Page>
      <SingleLayout />
    </Page>
  )
};

Layout.defaultProps = defaultProps;
Layout.propTypes = propTypes;

export async function getStaticPaths() {
  return {
    paths: layouts.map(({ slug }) => ({
      params: {
        layout: slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({
  params: {
    layout,
  },
}) {
  return {
    props: {
      layoutFile: `${layout}.mdx`,
    },
  }
}

export default Layout;
