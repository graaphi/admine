import React from 'react';

import Head from '../components/Head';
import LayouItem from '../components/LayouItem';
import Navbar from '../components/Navbar';
import Page from '../components/Page';

import layouts from '../queries/layouts';

const Layouts = () => (
  <Page direction="col">
    <Head title="Layouts" />
    <Navbar />
    <div className="container max-w-screen-xl mx-auto p-10 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {
          layouts.map(({
            title,
            slug,
            __resourcePath,
          }) => (
            <LayouItem
              key={__resourcePath}
              slug={slug}
              title={title}
            />
          ))
        }
      </div>
    </div>
  </Page>
);

export default Layouts;
