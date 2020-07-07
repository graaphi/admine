import React from 'react';

import Link from 'next/link';

import layouts from '../queries/layouts';

const Layouts = () => (
  <div className="flex flex-col w-full min-h-screen bg-gray-100 md:flex-row">
    <div className="container max-w-screen-sm mx-auto px-10 py-20">
      {
        layouts.map(({
          title,
          slug,
          __resourcePath,
        }) => (
          <div key={__resourcePath}>
            <Link href={'/[layout]'} as={`/${slug}`}>
              <a className="block shadow p-4 rounded bg-white">
                {title}
              </a>
            </Link>
          </div>
        ))
      }
    </div>
  </div>
);

export default Layouts;
