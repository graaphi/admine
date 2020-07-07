import React from 'react';

import Head from 'next/head';

const Page = (fm) => (
  ({ children: content }) => {
    return (
      <>
        <Head>
          <title>
            {`${fm.title} | Admine`}
          </title>
        </Head>
        {content}
      </>
    );
  }
);

export default Page;
