import React from 'react';

import dynamic from 'next/dynamic';

import layouts from '../queries/layouts';

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
      layout,
    },
  }
}

const Layout = ({
  layout,
}) => {
  const SingleLayout = dynamic(() => import(`../layouts/${layout}.mdx`));

  return (
    <SingleLayout />
  )
};

export default Layout;
